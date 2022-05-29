import React from 'react';
import { setUser } from '../store/appSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

function NavBar() {

    const userName = useAppSelector(state => state.appState.user)
    const dispatch = useAppDispatch()

    const handleLogOut = () => {
        dispatch(setUser(null))
        localStorage.removeItem('auth-token')
    }

    return (
        <nav className='navbar'>
            <span>Logged as: {userName}</span>
            <p>Welcome to our VOD app !</p>
            <button onClick={handleLogOut} className='navbar__btn-logout'>log out</button>
        </nav>
    );
}

export default NavBar;