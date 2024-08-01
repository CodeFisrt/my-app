import React from 'react';

const Admin = () => {
    let firstName = "Chetan";
    let rollNo = 121;
    const student = {
        name:"Adi",
        city: 'pune',
        rollno:223
    };
    const cityList = ["Pune","Mumbai","Jaipur"];

    const chnageFNAme= () => {
        debugger;
        firstName =  "Rahul";
    }
    const checkFNAmeValue= () => {
        debugger;
        console.log(firstName)
    }
    

    return (
        <div>
            <h4>firstName-- {firstName}</h4>
            <p>{rollNo}</p>
            <p>{student.name} {student.rollno}</p>
            <p>{cityList}</p>
            <input type='text' value={rollNo} placeholder='Eneter tex' />
            <button onClick={chnageFNAme}> Change FName</button>
            <button onClick={checkFNAmeValue}> Check FName</button>
        </div>
    );
};

export default Admin;