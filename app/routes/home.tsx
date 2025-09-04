import type { Route } from "./+types/home";
import mockData from "../../public/mock-data.json";
import { CustomizedTable } from "~/components/customized-table";
import styled from "@emotion/styled";
import { Chip } from "@mui/material";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  return mockData;
}

const columns = [
  {
    key: "id",
    header: "번호",
    width: "50px",
    render: (value: number) => value.toString(),
  },
  {
    key: "title",
    header: "제목",
    width: "auto",
    render: (value: string) => <strong>{value}</strong>,
  },
  {
    key: "myThink",
    header: "내 생각",
    width: "auto",
    render: (value: string) => <p>{value}</p>,
  },
  {
    key: "date",
    header: "날짜",
    width: "100px",
    render: (value: string) => new Date(value).toLocaleDateString(),
  },
  {
    key: "tag",
    header: "태그",
    width: "auto",
    render: (value: string) => <Chip label={value} />,
  },
];

export default function Home({ loaderData }: Route.ComponentProps) {
  const { articles } = loaderData;

  return (
    <>
      <Container>
        <Title>Read and Think a lot 📚</Title>
        <CustomizedTable columns={columns} data={articles} />
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
