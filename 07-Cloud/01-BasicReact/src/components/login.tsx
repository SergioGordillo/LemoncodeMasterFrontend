import React from "react";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (username === "admin" && password === "test") {
            navigate("/list");
        } else {
            alert("User / password not valid, psst... admin / test");
        }
    };

    return (
        <>
            <form onSubmit={handleNavigation}>
                <h2>Hello from login page</h2>

                <div>
                    <div>
                        <label>Username: </label>
                        <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}>
                        </TextField>
                    </div>
                    <div>
                        <label>Password: </label>
                        <TextField id="outlined-basic" label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}>
                        </TextField>
                    </div>
                </div>
                <Button variant="contained" type="submit">
                    Login
                </Button>
            </form>
        </>
    );
};