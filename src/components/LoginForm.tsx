import React, { useEffect, useState } from 'react';
import { useLogInUserMutation } from '../store/api';
import { setUser } from '../store/slices/appSlice';
import { useAppDispatch } from '../store/hooks';
import { XIcon } from '@heroicons/react/solid'

interface LoginFormProps {
    onCloseForm: () => void;
}

function LoginForm({ onCloseForm }: LoginFormProps) {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()
    const [logIn, { data }] = useLogInUserMutation()

    useEffect(() => {
        if (data) {
            localStorage.setItem('auth-token', data.AuthorizationToken.Token);
            dispatch(setUser(data.User.FullName))
            onCloseForm()
        }
    }, [data, dispatch, onCloseForm])

    
    const handleLogIn = (e: React.FormEvent) => {
        e.preventDefault()
        logIn({ username: userName, password })
    }

    return (
        <div className='login-form'>
            <form onSubmit={(e) => handleLogIn(e)}>
                <XIcon onClick={() => onCloseForm()} className='login-form__close-icon'/>
                <div className='login-form__label-input-box'>
                    <label htmlFor="email">EMAIL</label>
                    <input value={userName} type="email" id="email" onChange={(e) => setUserName(e.currentTarget.value)} />
                </div>
                <div className='login-form__label-input-box'>
                    <label htmlFor="password">PASSWORD</label>
                    <input value={password} type="password" id="password" onChange={(e) => setPassword(e.currentTarget.value)} />
                </div>
                <button className='login-form__btn' type="submit">submit</button>
            </form>
        </div>
    );
}

export default LoginForm;