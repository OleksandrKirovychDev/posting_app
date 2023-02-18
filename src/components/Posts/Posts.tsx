import useStyles from "./styles";
import Post from "./Post/Post";
const Posts = () => {
  const { classes, cx } = useStyles();

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
