import React,{useContext, useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import { AppContext } from "../../context/AppContext"


function CourseDetail(){

    const {id} = useParams()

    const [courseData, setCourseData] = useState(null)

    const {allCourse} = useContext(AppContext)

    const fetchCourseData = async () => {
       const findCourse = allCourse.find(course => course._id === id)
       setCourseData(findCourse);
    }

    useEffect(() => {
        fetchCourseData()
    },[])

    return(
        <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 md:pt-30 pt-20 text-left">
            {/*Left column*/}
            <div className="absolute top-0 left-0 w-full h-sectionHeight -z-1 bg-gradient-to-b from-cyan-100/70"></div>
            <div>
                <h1>{courseData.courseTitle}</h1>
            </div>

            {/*Right Column*/}
            <div></div>
        </div>
    );
}

export default CourseDetail