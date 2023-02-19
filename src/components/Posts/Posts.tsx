import { Grid, CircularProgress } from '@mui/material';

import useStyles from './styles';
import Post from './Post/Post';
import { useAppSelector } from '../../shared/hooks/useTypedSelector.hook';

const Posts = () => {
  const { classes, cx } = useStyles();

  const { posts } = useAppSelector((state) => state.posts);
  const { isLoading } = useAppSelector((state) => state.posts);

  return isLoading && !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={cx(classes.mainContainer)}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post.id} xs={12} sm={4} item>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
