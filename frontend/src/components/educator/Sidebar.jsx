import React,{useContext} from  'react'
import {assets} from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

function Sidebar(){

    const { isEducator } = useContext(AppContext)

    const menuItems = [
        {
            name: 'Dashboard',
            path: '/educator',
            icon: assets.home_icon
        },
        {
            name: 'Add Course',
            path: '/educator/add-course',
            icon: assets.add_icon
        },
        {
            name: 'My Course',
            path: '/educator/my-courses',
            icon: assets.my_course_icon
        },
        {
            name: 'Student Enrolled',
            path: '/educator/student-enrolled',
            icon: assets.person_tick_icon
        }
    ]

    return isEducator && (
        <div className="md:w-64 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col">
            <h1>Sidebar</h1>
        </div>
    );
}

export default Sidebar