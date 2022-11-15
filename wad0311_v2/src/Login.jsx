import React from 'react';

function Login(props) {
    return (
        <form>
            <input type='text' placeholder='User Name' required/>
            <input type='password' placeholder='Password' required/>
            <button type='submit' onClick={props.handler}>Log in</button>
        </form>
    )
}

export default Login;