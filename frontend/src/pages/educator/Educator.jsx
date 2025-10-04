import React from 'react'
import {Outlet} from 'react-router-dom' 
import NavBar from '../../components/educator/Navbar';
import Sidebar from '../../components/educator/Sidebar';

function Educator(){

    return(
        <div className="text-default min-h-screen bg-white">
            <NavBar />
            <Sidebar />
            <div>
                {<Outlet/>}
            </div>
        </div>
    );
}

export default Educator