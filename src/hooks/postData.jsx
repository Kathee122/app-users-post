import { useEffect, useState } from "react";
import axios from "axios";


const postData = (userId) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
                setPosts(response.data); 
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [userId]); // Asegúrate de que el hook se ejecute cuando userId cambie

    return posts;
};

export default postData;
