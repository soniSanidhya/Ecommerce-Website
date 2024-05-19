import React from 'react';
import Footter from '../Footer/Footter';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footter/>
        </>
    );
}

export default Layout;