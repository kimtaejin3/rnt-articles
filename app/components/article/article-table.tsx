import { Chip } from "@mui/material";
import CustomizedTable from "../ui/customized-table";
import type { Article } from "~/types/article";

export default function ArticleTable({ articles }: { articles: Article[] }) {
  return (
    <CustomizedTable
      columns={columns}
      data={articles.map((article) => ({
        ...article,
        title: { title: article.title, link: article.link },
      }))}
    />
  );
}

const columns = [
  {
    key: "id",
    header: "번호",
    width: "30px",
    render: (value: number) => value.toString(),
  },
  {
    key: "title",
    header: "제목",
    width: "auto",
    render: (value: { title: string; link: string }) => (
      <a target="_blank" href={value.link}>
        {value.title}
      </a>
    ),
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
  {
    key: "actions",
    header: "퀴즈",
    width: "30px",
    render: (value: string) => "퀴즈",
  },
];
