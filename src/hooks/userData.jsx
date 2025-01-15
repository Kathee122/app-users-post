import { useEffect, useState } from "react";
import axios from "axios";

//Metodo que obtiene todos los usuarios de la api
const userData = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data); 
            } catch (error) {
                console.error('Error fetching users:', error);
            }finally{
                setLoading(false)
            }
        };

        fetchUsers();
    }, []);

    return {users,loading};
};

export default userData;

