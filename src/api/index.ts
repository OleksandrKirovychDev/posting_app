import axios from "axios";
import { BASE_URL, POSTS } from "../constants/url.constants";
import { IPost } from "../shared/interfaces/post.interface";

export const fetchPosts = () => axios.get<IPost[]>(`${BASE_URL}/${POSTS}`);
