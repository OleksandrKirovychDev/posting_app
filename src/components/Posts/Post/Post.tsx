import { Card, CardActions, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import useStyles from './styles';
import { IPost } from '../../../shared/entities/post.entity';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/hooks/useTypedSelector.hook';
import {
  deletePost,
  selectPost,
  clearSelectedPost,
} from '../../../store/features/posts.feature';
import { useNavigate } from 'react-router-dom';

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { classes, cx } = useStyles();
  const { isLoading } = useAppSelector((store) => store.posts);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const deleteCurrentPost = (id: number) => {
    dispatch(deletePost(id));
    dispatch(clearSelectedPost());
  };
  const selectCurrentPost = (id: number) => dispatch(selectPost(id));

  return (
    <Card className={cx(classes.card, classes.fullHeightCard)}>
      <div>
        <Button
          style={{ color: 'white' }}
          size="small"
          onClick={() => selectCurrentPost(post.id)}
        >
          <MoreHorizIcon fontSize="medium" color="primary" />
        </Button>
      </div>
      <Typography className={cx(classes.title)} variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <Typography className={cx(classes.details)} variant="body2" gutterBottom>
        {post.body}
      </Typography>
      <CardActions className={cx(classes.cardActions)} color="primary">
        <Button
          size="small"
          color="primary"
          disabled={isLoading}
          onClick={() => {
            deleteCurrentPost(post.id);
          }}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
        <Button
          size="small"
          color="primary"
          disabled={isLoading}
          onClick={() => {
            navigate(`../posts/${post.id}`);
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
