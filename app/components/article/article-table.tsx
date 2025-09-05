import { Chip } from "@mui/material";
import { CustomizedTable } from "../ui/customized-table";
import type { Article } from "~/types/article";

export function ArticleTable({ articles }: { articles: Article[] }) {
  return <CustomizedTable columns={columns} data={articles} />;
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
