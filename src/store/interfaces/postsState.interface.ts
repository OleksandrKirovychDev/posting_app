import { IPost } from '../../shared/entities/post.entity';

export interface IPostState {
  isLoading: boolean;
  error: string | null;
  posts: IPost[];
  selected: IPost | null;
}
