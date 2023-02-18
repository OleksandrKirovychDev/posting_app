import { IPost } from "../../shared/interfaces/post.interface";

export interface IPostState {
  isLoading: boolean;
  error: string | null;
  posts: IPost[];
  selected: IPost | null;
}
