import { Card, CardActions, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useStyles from "./styles";
import { IPost } from "../../../shared/interfaces/post.interface";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/useTypedSelector.hook";
import { deletePost } from "../../../store/features/posts.feature";

const Post = ({ post }: { post: IPost }) => {
  const { classes, cx } = useStyles();
  const { isLoading } = useAppSelector((store) => store.posts);
  const dispatch = useAppDispatch();

  const deleteCurrentPost = (id: number) => dispatch(deletePost(id));

  return (
    <Card className={cx(classes.card, classes.fullHeightCard)}>
      <div>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
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
      </CardActions>
    </Card>
  );
};

export default Post;
