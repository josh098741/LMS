import React from 'react'
import {Outlet} from 'react-router-dom' 
import NavBar from '../../components/educator/Navbar';
import Sidebar from '../../components/educator/Sidebar';

function Educator(){

    return(
        <div className="text-default min-h-screen bg-white">
            <NavBar />
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    {<Outlet/>}
                </div>
                
            </div>
        </div>
    );
}

export default Educator