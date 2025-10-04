import React,{useState,useEffect,useContext} from 'react'
import {assets} from '../../assets/assets'
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import humanizeDuration from 'humanize-duration';

function Player(){

    const {enrolledCourses, calculateChapterTime} = useContext(AppContext)
    const {courseId} = useParams()
    const [courseData, setCourseData] = useState(null)
    const [openSection, setOpenSection] = useState({})
    const [playerData, setPlayerData] = useState(null)

    

    const toggleSection = (index) => {
        setOpenSection((prev) => (
            {...prev,[index]:!prev[index]}
        ))
    }

    useEffect(() => {
        const fetchCourseData = () => {
            enrolledCourses.map((course) => {
                if(course._id === courseId){
                    setCourseData(course)
                }
            })
        }
        fetchCourseData()
    },[])

    return(
        <>
            <div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">

                {/*Left Column*/}
                <div>
                    <h2 className="text-xl font-semibold">Course Structure</h2>

                    <div className="pt-5">
                        {courseData && courseData.courseContent.map((chapter,index) => (
                            <div key={index} className="border border-gray-300 bg-white mb-2 rounded">
                                <div className="flex items-center justify-between px-4 py-3 cursor-pointer select-none" onClick={() => toggleSection(index)}>
                                    <div className="flex item-center gap-2">
                                        <img className={`transform transition-transform ${openSection[index] ? 'rotate-180':''}`} src={assets.down_arrow_icon} alt="arrow icon" />
                                        <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                                    </div>
                                    <p className="text-sm md:text-default">{chapter.chapterContent.length} Lectures - {calculateChapterTime(chapter)}</p>
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ${openSection[index] ? 'max-h-96':'max-h-0'}`}>
                                    <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                                        {chapter.chapterContent.map((lecture,index) => (
                                            <li key={index} className="flex items-start gap-2 py-1">
                                                <img src={false ? assets.blue_tick_icon : assets.play_icon} alt="play icon" />
                                                <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                                                    <p>{lecture.lectureTitle}</p>
                                                    <div className="flex gap-2">
                                                        {lecture.lectureUrl && <p onClick={() => setPlayerData({
                                                            ...lecture,chapter: index + 1, lecture: i+1
                                                        })} className="text-blue-500 cursor-pointer">Watch</p>}
                                                        <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, {units:['h', 'm']})}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div></div>

            </div>
        </>
        
    );
}

export default Player