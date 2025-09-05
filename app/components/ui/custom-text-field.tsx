import { TextField, type TextFieldProps, colors } from "@mui/material";

interface CustomTextFieldProps extends Omit<TextFieldProps, "variant"> {
  marginBottom?: string;
}

export default function CustomTextField({
  marginBottom = "20px",
  sx,
  ...props
}: CustomTextFieldProps) {
  return (
    <TextField
      variant="outlined"
      size="small"
      type="text"
      fullWidth
      sx={{
        marginBottom,
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
          "& fieldset": {
            borderColor: "#e0e0e0",
          },
          "&:hover fieldset": {
            borderColor: "#bdbdbd",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#757575",
          },
        },
        "& .MuiInputLabel-root": {
          "&.Mui-focused": {
            color: "#757575",
          },
        },
        ...sx,
      }}
      {...props}
    />
  );
}
