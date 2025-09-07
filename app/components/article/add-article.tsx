import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { overlay } from "overlay-kit";
import { Dialog } from "@mui/material";
import Close from "@mui/icons-material/Close";
import ControlPoint from "@mui/icons-material/ControlPoint";
import Flex from "../ui/flex";
import AddArticleForm from "./add-article-form";

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
                <AddArticleForm onActionAfterSubmit={close} />
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
