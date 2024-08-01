import React, { useState } from 'react';

const UseState = () => {

    let courseName = "React";

    const [courseDuration, setCourseDuration] = useState("3 Month");
    const [rollNo, setRollNo] = useState(121);
    const [isActive,setIsActive] = useState(false);
    const [currentDate,setCurrentDate] = useState(new Date());

    const [studentObj,setStudentobj]= useState({name:'Chetan',city:'Nagpur'});
    const [cityList, setCityList] = useState(['pune','nagpur','mumbai'])


    const chnageCourseNAme = () => {
        debugger;
        courseName = "Angular"
    }

    const chnageCourseDuration = () => {
        debugger;
        setCourseDuration("4 Month including project")
    }

    return (
        <div>
            <h4>{courseName}</h4>
            <h5>{courseDuration}</h5>
            <input type='text' value={courseDuration} />

            <button className='btn btn-success' onClick={chnageCourseNAme}>Chnage Course</button>
            <button onClick={chnageCourseDuration}>Chnage Duration</button>
        </div>
    );
};

export default UseState;