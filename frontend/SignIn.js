import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        const response = await axios.post('/api/user/login', { username, password });
        alert(response.data.message);
    };

    return (
        <div>
            <h2>Sign In</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default SignIn;
