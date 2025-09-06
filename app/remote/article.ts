import { createClient } from "~/lib/supabase/server";

export const getArticles = async ({ request }: { request: Request }) => {
  const { supabase } = createClient(request);

  const { data: articles } = await supabase.from("article").select("*");
  console.log(articles);

  if (!articles) {
    return [];
  }

  return articles;
};
