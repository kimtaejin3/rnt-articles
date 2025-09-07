import { createClient } from "~/lib/supabase/server";

const itemPerPage = 10;

export const getArticles = async ({ request }: { request: Request }) => {
  const { supabase } = createClient(request);

  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1");

  const from = (page - 1) * itemPerPage;
  const to = from + itemPerPage - 1;

  const {
    data: articles,
    count,
    error,
  } = await supabase
    .from("article")
    .select("*", { count: "exact" })
    .order("id", { ascending: true })
    .range(from, to);

  if (error) throw error;

  return {
    articles: articles ?? [],
    totalItems: count ?? 0,
    currentPage: page,
    itemPerPage,
  };
};

export const addArticle = async ({ request }: { request: Request }) => {
  const { supabase } = createClient(request);

  const formData = await request.formData();
  const payload = {
    title: String(formData.get("title") ?? ""),
    think: String(formData.get("think") ?? ""),
    date: String(formData.get("date") ?? ""),
    tag: String(formData.get("tag") ?? ""),
    link: String(formData.get("link") ?? ""),
  };

  const { data, error } = await supabase
    .from("article")
    .insert([payload])
    .select();

  if (error) throw error;

  return data;
};
