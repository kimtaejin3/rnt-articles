import type { Route } from "./+types/home";
import mockData from "../../public/mock-data.json";
import styled from "@emotion/styled";
import { ArticleTable } from "~/components/article/article-table";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  return mockData;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { articles } = loaderData;

  return (
    <>
      <Container>
        <Title>Read and Think a lot 📚</Title>
        <ArticleTable articles={articles} />
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 1400px;
  margin: 40px auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 20px;
  font-family: "Story Script", sans-serif;
`;
