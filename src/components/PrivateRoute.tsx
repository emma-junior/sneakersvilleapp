import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../redux/reducers';
import { CurrentUser } from '../model';

export const PrivateRoute = () => {
    const User:CurrentUser | null = useSelector((state:State) => state.user.currentUser);

    return User ? <Navigate to="/" /> : <Outlet />;
}

export default PrivateRoute