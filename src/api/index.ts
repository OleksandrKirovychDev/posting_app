import axios from 'axios';
import {
  BASE_URL,
  COMMENTS,
  EMBED_COMMENTS_QUERY,
  POSTS,
} from '../constants/api.constants';
import { IComment } from '../shared/entities/comment.entity';
import { IPost } from '../shared/entities/post.entity';

export const fetchPosts = () => axios.get<IPost[]>(`${BASE_URL}/${POSTS}`);

export const createPosts = (newPost: Omit<IPost, 'id'>) =>
  axios.post<IPost>(`${BASE_URL}/${POSTS}`, newPost);

export const deletePost = (id: number) =>
  axios.delete<void>(`${BASE_URL}/${POSTS}/${id}`);

export const updatePost = (newPost: IPost) =>
  axios.put<IPost>(`${BASE_URL}/${POSTS}/${newPost.id}`, newPost);

export const getPostDetails = (id: number) =>
  axios.get<IPost & { comments: IComment[] }>(
    `${BASE_URL}/${POSTS}/${id}?${EMBED_COMMENTS_QUERY}`,
  );

export const postComment = (comment: Omit<IComment, 'id'>) =>
  axios.post<void>(`${BASE_URL}/${COMMENTS}`, comment);
