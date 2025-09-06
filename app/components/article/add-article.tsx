import {
  Button,
  colors,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { overlay } from "overlay-kit";
import { Dialog } from "@mui/material";
import Close from "@mui/icons-material/Close";
import ControlPoint from "@mui/icons-material/ControlPoint";
import { Form } from "react-router";
import Flex from "../ui/flex";
import CustomTextField from "../ui/custom-text-field";

//supabase db: wRUzFSzIk1I14pmQ
export default function AddArticle() {
  return (
    <Button
      sx={{ display: "flex", alignItems: "center", gap: "5px", color: "#000" }}
      variant="text"
      color="primary"
      onClick={() => {
        overlay.open(({ isOpen, close }) => {
          return (
            <Dialog
              open={isOpen}
              onClose={close}
              slotProps={{
                paper: {
                  sx: {
                    borderRadius: "20px",
                    padding: "10px",
                    overflow: "hidden",
                  },
                },
              }}
            >
              <Flex>
                <DialogTitle sx={{ fontSize: "16px" }}>글 추가하기</DialogTitle>
                <DialogActions>
                  <Button onClick={close}>
                    <Close sx={{ color: "#000", fontSize: "20px" }} />
                  </Button>
                </DialogActions>
              </Flex>
              <DialogContent sx={{ width: "400px" }}>
                <Form method="post">
                  <CustomTextField name="link" label="링크" />
                  <CustomTextField name="title" label="제목" />
                  <CustomTextField
                    name="myThink"
                    label="내 생각"
                    multiline
                    rows={4}
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="날짜"
                      name="date"
                      enableAccessibleFieldDOMStructure={false}
                      slots={{
                        textField: CustomTextField,
                      }}
                      slotProps={{
                        textField: {
                          name: "date",
                        },
                      }}
                    />
                  </LocalizationProvider>

                  <CustomTextField name="tag" label="태그" select>
                    <MenuItem value="tag1">Tag 1</MenuItem>
                    <MenuItem value="tag2">Tag 2</MenuItem>
                    <MenuItem value="tag3">Tag 3</MenuItem>
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
              </DialogContent>
            </Dialog>
          );
        });
      }}
    >
      <ControlPoint fontSize="small" />
    </Button>
  );
}
