import React from 'react';

const Contact = () => {
    const conatctName= "AAA BB CC";
    const selectedCity = "Mumbai";
    const htmlText = "<h1> Hii From H1 Tag </h1>";
    const isPresent =  false;

    return (
        <div>
            <p>Hi From {conatctName.charAt(0)}</p>
            <select value={selectedCity}>
                <option>Select City</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Jaipur">Jaipur</option>
            </select>
            <br></br>
            <p> isPresent- {isPresent ? 'Student Presnet' : 'Student is Absent' }</p>
        </div>
    );
};

export default Contact;