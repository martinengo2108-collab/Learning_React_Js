import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getPost } from "../services/postservice";
import Loading from "../components/Loading";

function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

}