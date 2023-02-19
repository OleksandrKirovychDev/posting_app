import { IComment } from '../../shared/entities/comment.entity';
import { IPost } from '../../shared/entities/post.entity';

export interface IPostDetaisState {
  isLoading: boolean;
  isCommentLoading: boolean;
  error: string | null;
  post: IPost | null;
  comments: IComment[];
}
