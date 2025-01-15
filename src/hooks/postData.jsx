import { useEffect, useState } from "react";
import axios from "axios";

//Metodo que obtiene todos los post que ha hecho cada usuario de la api
const postData = (userId) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
                setPosts(response.data); 
            } catch (error) {
                console.error('Error fetching posts:', error);
            }finally{
                setLoading(false)
            }

        };

        fetchPosts();
    }, [userId]); 

    return {posts,loading};
};

export default postData;
