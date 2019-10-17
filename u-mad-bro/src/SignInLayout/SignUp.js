import React, { useState } from 'react';

export default function SignUp() {
    const [credentials, setCredentials] = useState({username: "", password: ""});

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        setCredentials({username: "", password: ""});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                value={credentials.username}
                name="username"
                type="text"
                onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                value={credentials.password}
                name="password"
                type="password"
                onChange={handleChange}
            />
        </form>
    );
}