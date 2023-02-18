import useStyles from "./styles";
import Post from "./Post/Post";
import { useAppSelector } from "../../shared/hooks/useTypedSelector.hook";

const Posts = () => {

  const { classes, cx } = useStyles();
  
  const { posts } = useAppSelector((state) => state.posts);

  return (
    <>
      <h1>Posts</h1>;
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Posts;
