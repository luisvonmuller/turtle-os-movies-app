import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

/* New comment Components */
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
/* Services */
import { Comment } from "../../Types";
import { listComments, pushComment } from "../../Services/comments";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CommentBoxInterface {
  movieId: string;
  open: boolean;
  setOpen(open: boolean): void;
}

export default function CommentBox({
  movieId,
  open,
  setOpen,
}: CommentBoxInterface) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setNewComment] = useState<string>("");

  const getComments = async (movieId: string) => {
    let tmpComments = await listComments(movieId);
    setComments(tmpComments);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getComments(movieId);
  }, [movieId]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      pushComment(movieId, comment);
      setComments([...comments, { content: comment }]);
      setNewComment("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h4" component="div">
              🍿 Movies Reviews 🥰
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {comments && comments.length !== 0 && (
            <>
              {comments.map((comment, index) => {
                return (
                  <ListItem key={index} button>
                    <ListItemText
                      primary={comment.content}
                      secondary="By @someone (I'm sure)"
                    />
                  </ListItem>
                );
              })}
            </>
          )}
          <ListItem>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="What do you think about this Great and Awesome movie, mate?"
                placeholder="Give us your valueable opinion!"
                value={comment}
                variant="outlined"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
            </FormControl>
          </ListItem>
        </List>
      </Dialog>
    </>
  );
}
