import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import type { Article } from "~/types/article";
import CustomTextField from "../ui/custom-text-field";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { Button, colors, MenuItem } from "@mui/material";
import { Form, useSubmit } from "react-router";

const formSchema = z.object({
  link: z.string().min(1, "필수 입력입니다."),
  title: z.string().min(1, "필수 입력입니다."),
  think: z.string().min(1, "필수 입력입니다."),
  date: z.string().min(1, "필수 입력입니다."),
  tag: z.string().min(1, "필수 입력입니다."),
});

interface AddArticleFormProps {
  onActionAfterSubmit?: () => void;
}

export default function AddArticleForm({
  onActionAfterSubmit,
}: AddArticleFormProps) {
  const submit = useSubmit();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Omit<Article, "id">>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: "",
      title: "",
      think: "",
      date: "",
      tag: "",
    },
  });

  return (
    <Form
      method="post"
      onSubmit={handleSubmit((data) => {
        submit(data, { method: "post" });
        onActionAfterSubmit?.();
      })}
    >
      <CustomTextField
        label="링크"
        {...register("link")}
        error={!!errors.link}
        helperText={errors.link?.message}
      />
      <CustomTextField
        label="제목"
        {...register("title")}
        error={!!errors.title}
        helperText={errors.title?.message}
      />
      <CustomTextField
        label="내 생각"
        multiline
        rows={4}
        {...register("think")}
        error={!!errors.think}
        helperText={errors.think?.message}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <DatePicker
              label="날짜"
              value={field.value ? dayjs(field.value) : null}
              onChange={(newValue) => {
                field.onChange(newValue ? newValue.format("YYYY-MM-DD") : "");
              }}
              enableAccessibleFieldDOMStructure={false}
              slots={{
                textField: CustomTextField,
              }}
              slotProps={{
                textField: {
                  name: "date",
                  error: !!errors.date,
                  helperText: errors.date?.message,
                },
              }}
            />
          )}
        />
      </LocalizationProvider>

      <CustomTextField
        label="태그"
        select
        {...register("tag")}
        error={!!errors.tag}
        helperText={errors.tag?.message}
      >
        <MenuItem value="performance">performance</MenuItem>
        <MenuItem value="component design">component design</MenuItem>
        <MenuItem value="ux">ux</MenuItem>
        <MenuItem value="dx">dx</MenuItem>
      </CustomTextField>

      <Button
        variant="contained"
        fullWidth
        sx={{
          color: "#fff",
          background: colors.grey[900],
          borderRadius: "12px",
          marginTop: "20px",
        }}
        type="submit"
      >
        확인
      </Button>
    </Form>
  );
}
