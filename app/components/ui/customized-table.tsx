import {
  colors,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface ArticleTableProps {
  columns: {
    key: string;
    header: string;
    width: string;
    render: (value: any) => React.ReactNode;
  }[];
  data: { id: number; [key: string]: any }[];
}

export default function CustomizedTable({ columns, data }: ArticleTableProps) {
  return (
    <Table
      sx={{
        backgroundColor: "white",
        borderRadius: "20px",
      }}
    >
      <TableHead>
        <TableRow>
          {columns.map((item) => (
            <TableCell key={item.key} sx={{ width: item.width }}>
              {item.header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <StyledTableRow key={item.id}>
            {columns.map((column) => (
              <TableCell key={column.key} sx={{ width: column.width }}>
                {column.render(item[column.key])}
              </TableCell>
            ))}
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: colors.grey[50],
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
