import React from 'react'
import {Outlet} from 'react-router-dom' 
import NavBar from '../../components/educator/Navbar';

function Educator(){

    return(
        <div className="text-default min-h-screen bg-white">
            <NavBar />
            <div>
                {<Outlet/>}
            </div>
        </div>
    );
}

export default Educator