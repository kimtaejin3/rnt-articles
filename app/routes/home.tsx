import type { Route } from "./+types/home";
import mockData from "../../public/mock-data.json";
import styled from "@emotion/styled";
import ArticleTable from "~/components/article/article-table";
import AddArticle from "~/components/article/add-article";
import { Pagination } from "@mui/material";
import Flex from "~/components/ui/flex";
import { getArticles } from "~/remote/article";
import { ArticlesSchema } from "~/types/article";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const { articles, currentPage, totalItems, itemPerPage } = await getArticles({
    request,
  });

  const parsedArticles = ArticlesSchema.parse(articles);

  return {
    articles: parsedArticles,
    currentPage,
    totalItems,
    totalPages: Math.ceil(totalItems / itemPerPage),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { articles, currentPage, totalPages } = loaderData;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", value.toString());
    window.location.href = url.toString();
  };

  return (
    <>
      <Container>
        <Header>
          <Title>Read and Think and Solve 📖</Title>
          <AddArticle />
        </Header>
        <ArticleTable articles={articles} />
        <Flex
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "20px" }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Flex>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 1180px;
  margin: 40px auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 20px;
  font-family: "Story Script", sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
