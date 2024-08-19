import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [courseName,setCourseName]= useState("");
    const [courDuration,setcourDuration]= useState("");
    const [users,setusers]= useState("");

    useEffect(() => {
        console.log("on Every State Update");
    })
   
    useEffect(() => {
        console.log("on Page Load Only");
    },[])

    useEffect(()=>{
        console.log("on courseName chnage")
    },[courseName])

    useEffect(()=>{
        console.log("On courseName or courDuration update")
    },[courseName,courDuration])

    useEffect(() => {
        console.log("on Page Load Only 22");
        getUsers()
    }, [] )

    const onCourseChange = (event)=>{
        setCourseName(event.target.value)
    }
    const onCourseDurationChange = (event)=>{
        setcourDuration(event.target.value)
    }

    const getUsers = async ()=>{
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setusers(result.data)
    }

    return (
        <div>
            {courseName}
            <input type='text' onChange={(event)=>onCourseChange(event)} />
            <br/>
            <input type='text' onChange={(event)=>onCourseDurationChange(event)} />
        </div>
    );
};

export default UseEffect;