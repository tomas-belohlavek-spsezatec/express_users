import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/login");
                return;
            }

            try {
                const response = await axios.get("http://localhost:3001/user", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data);
            } catch (error) {
                navigate("/login");
            }
        };

        fetchUser();
    }, [navigate]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Page</h1>
            <p>Welcome, {user.username}</p>
        </div>
    );
};

export default UserPage;