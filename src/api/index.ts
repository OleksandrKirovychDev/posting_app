import axios from "axios";
import { BASE_URL, POSTS } from "../constants/api.constants";
import { IPost } from "../shared/entities/post.entity";

export const fetchPosts = () => axios.get<IPost[]>(`${BASE_URL}/${POSTS}`);

export const createPosts = (newPost: Omit<IPost, "id">) =>
  axios.post<IPost>(`${BASE_URL}/${POSTS}`, newPost);

export const deletePost = (id: number) =>
  axios.delete<void>(`${BASE_URL}/${POSTS}/${id}`);

export const updatePost = (newPost: IPost) =>
  axios.put<IPost>(`${BASE_URL}/${POSTS}/${newPost.id}`, newPost);
