import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setUserName} from "../slices/userSlice";

function LoginScreen(props) {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (name) {
            localStorage.setItem('userName', name)
            dispatch(setUserName(name))
        } else {
            alert('Name cannot be an empty string!')
        }
    }

    return (
        <div>
            <label htmlFor="login"> Enter your name please: </label>
            <input type="text" name="login"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleSubmit}> Submit</button>
        </div>
    );
}

export default LoginScreen;