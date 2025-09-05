import type { Route } from "./+types/home";
import mockData from "../../public/mock-data.json";
import styled from "@emotion/styled";
import ArticleTable from "~/components/article/article-table";
import AddArticle from "~/components/article/add-article";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  return mockData;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { articles } = loaderData;

  return (
    <>
      <Container>
        <Header>
          <Title>Read and Think and Solve 📖</Title>
          <AddArticle />
        </Header>
        <ArticleTable articles={articles} />
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
