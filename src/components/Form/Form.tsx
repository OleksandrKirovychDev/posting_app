import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useEffect, useState } from 'react';

import { IPost } from '../../shared/entities/post.entity';
import {
  useAppDispatch,
  useAppSelector,
} from '../../shared/hooks/useTypedSelector.hook';
import {
  clearSelectedPost,
  createPost,
  updatePost,
} from '../../store/features/posts.feature';

const Form: React.FC = () => {
  const { classes, cx } = useStyles();
  const { isLoading } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const selectedPost = useAppSelector((state) => state.posts.selected);

  const [postData, setPostData] = useState<IPost>({
    title: '',
    body: '',
    id: 0,
  });

  useEffect(() => {
    if (selectedPost) setPostData(selectedPost);
  }, [selectedPost]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!selectedPost) {
      dispatch(createPost(postData));
    } else {
      dispatch(updatePost(postData));
    }
    clear();
  };

  const clear = () => {
    if (selectedPost) {
      dispatch(clearSelectedPost());
    }
    setPostData({ title: '', body: '', id: 0 });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
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
        <Typography variant="h6">
          {!selectedPost ? 'Create a' : 'Update the'} Post
        </Typography>
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
          {!selectedPost ? 'Clear' : 'Discard'}
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
