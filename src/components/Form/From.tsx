import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";

import { IPost } from "../../shared/interfaces/post.interface";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/hooks/useTypedSelector.hook";
import { createPost } from "../../store/features/posts.feature";

const Form = () => {
  const { classes, cx } = useStyles();
  const { isLoading } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const [postData, setPostData] = useState<Omit<IPost, "id">>({
    title: "",
    body: "",
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  const clear = () => {
    setPostData({ title: "", body: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPostData({ ...postData, [e?.target.name]: e?.target.value });
  };

  return (
    <Paper className={cx(classes.paper)}>
      <form
        autoComplete="off"
        noValidate
        className={cx(classes.root, classes.form)}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Post</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          name="body"
          multiline
          rows={4}
          variant="outlined"
          label="Body"
          fullWidth
          value={postData.body}
          onChange={(e) => handleChange(e)}
        />
        <Button
          className={cx(classes.buttonSubmit)}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          disabled={isLoading}
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={cx(classes.buttonSubmit)}
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
