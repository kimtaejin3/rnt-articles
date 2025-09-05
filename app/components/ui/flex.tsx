import { Box, type BoxProps } from "@mui/material";
import type { ReactNode } from "react";

interface FlexProps extends Omit<BoxProps, "display"> {
  children: ReactNode;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  gap?: string | number;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
}

export default function Flex({
  children,
  direction = "row",
  align = "center",
  justify = "space-between",
  gap = 0,
  wrap = "nowrap",
  sx,
  ...props
}: FlexProps) {
  return (
    <Box
      display="flex"
      flexDirection={direction}
      alignItems={align}
      justifyContent={justify}
      gap={gap}
      flexWrap={wrap}
      sx={sx}
      {...props}
    >
      {children}
    </Box>
  );
}
