import React from 'react';
import axios from 'axios';

const Login = (props) => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [username, setUsername] = React.useState("");
    console.log({ loggedIn });
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                setUsername(event.target.user.value);
                axios.get("http://localhost:3001/test?user=" + event.target.user.value + "&pass=" + event.target.pass.value)
                    .then((resp) => {
                        setLoggedIn(true);
                        console.log(resp);
                    });
            }} style={{ display: loggedIn ? 'none' : 'block' }}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="user" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="pass" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        <h3 style={{ display: loggedIn ? 'block' : 'none' }}>Welcome {username}</h3>
        </div>
    );
}

export default Login;