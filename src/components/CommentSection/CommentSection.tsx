import { useState, SyntheticEvent } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "./styles";
import { IPost } from "../../shared/entities/post.entity";
import { IComment } from "../../shared/entities/comment.entity";
import { postComment } from "../../store/features/postDetails.feature";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/hooks/useTypedSelector.hook";

interface CommentSectionProps {
  post: IPost;
  comments: IComment[];
}

const CommentSection = ({ comments, post }: CommentSectionProps) => {
  const { classes, cx } = useStyles();
  const { isCommentLoading } = useAppSelector((state) => state.postDetails);
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState<Omit<IComment, "id" | "postId">>({
    body: "",
    email: "",
    name: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setComment({ ...comment, [e?.target.name]: e?.target.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(postComment({ ...comment, postId: post.id }));
  };

  return (
    <div className={cx(classes.commentsContainer)}>
      <Box display="flex" justifyContent="space-between" width="100%">
        <div className="div">
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.map((c, i) => (
            <div key={i}>
              <Typography gutterBottom variant="subtitle1">
                {c.email}: <b>{c.name}</b>
              </Typography>
              <Typography maxWidth="300px" gutterBottom variant="body2">
                {c.body}
              </Typography>
            </div>
          ))}
        </div>
        <form
          style={{
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <Typography gutterBottom variant="h6">
            Leave a Comment!
          </Typography>
          <TextField
            fullWidth
            required
            type="email"
            variant="outlined"
            name="email"
            label="email"
            value={comment.email}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            fullWidth
            required
            variant="outlined"
            name="name"
            label="name"
            value={comment.name}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            fullWidth
            required
            rows={4}
            variant="outlined"
            name="body"
            label="comment"
            multiline
            value={comment.body}
            onChange={(e) => handleChange(e)}
          />
          <Button
            className={cx(classes.button)}
            fullWidth
            disabled={isCommentLoading}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default CommentSection;
