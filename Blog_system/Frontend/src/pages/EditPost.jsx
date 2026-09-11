import { useEffect,useState } from "react";

import { useNavigate,useParams } from "react-router-dom";

import PostForm from "../components/postForm";
import { createPost } from "../services/postservice";
