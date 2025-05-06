import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/users/all');
                setUsers(response.data);
            } catch (error) {
                setError('Failed to fetch users. Please try again later.');
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container mt-5">
            <h2>User List</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.username}>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.email}</td>
                            <td>{user.admin ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;