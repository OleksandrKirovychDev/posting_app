import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { Paper, Typography, Divider, Grow } from '@mui/material';
import useStyles from './styles';

import CommentSection from '../../components/CommentSection/CommentSection';
import {
  useAppDispatch,
  useAppSelector,
} from '../../shared/hooks/useTypedSelector.hook';
import {
  discardPostDetails,
  getPostDetails,
} from '../../store/features/postDetails.feature';

const PostDetails: React.FC = () => {
  const { classes, cx } = useStyles();
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostDetails(Number(id)));

    return () => {
      dispatch(discardPostDetails());
    };
  }, [dispatch, id]);

  const { post } = useAppSelector((state) => state.postDetails);
  const { comments } = useAppSelector((state) => state.postDetails);

  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Grow in>
        <Paper
          style={{ padding: '20px', maxWidth: '1500px', flexGrow: '1' }}
          elevation={6}
        >
          <div className={cx(classes.card)}>
            <div className={cx(classes.section)}>
              <Typography variant="h4" component="h3">
                {post?.title}
              </Typography>
              <Typography gutterBottom variant="body1" component="p">
                {post?.body}
              </Typography>
              <Divider style={{ margin: '20px 0' }} />
            </div>
          </div>
          <CommentSection comments={comments} post={post!} />
        </Paper>
      </Grow>
    </Box>
  );
};

export default PostDetails;
