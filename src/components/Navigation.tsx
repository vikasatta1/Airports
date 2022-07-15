import React from 'react';
import {Link} from "react-router-dom";
import '../index.css'
import {useAppDispatch, useAppSelector} from "../hook/redux";
import {authSlice} from "../store/slices/authSlice";

const Navigation = () => {
    const dispatch = useAppDispatch()
    const {isAuth, username,access} = useAppSelector(state => state.auth)
    const logoutHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        dispatch(authSlice.actions.logout())
    }
    return (
        <nav className="flex justify-between px-5 h-[50px] bg-gray-200 items-center shadow-md">
            <Link to={'/'}>Airport</Link>
            {!isAuth && <Link to={'/auth'}>Auth</Link>}
            {isAuth && <div className={'flex flex-col'}>
                <span className={'font-bolt '}>{username}</span>
                <a href={'#'} onClick={logoutHandler}>Logout</a></div>}
        </nav>
    );
}

export default Navigation;