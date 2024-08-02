import React, { useState } from 'react';

const UseStateArray = () => {
    const [cityList,setCityList] = useState(["Pune"]);
    const [cityName,setCityName] = useState("");

    const cityChnage = (event) => {
        setCityName(event.target.value)
    }
    const addCity = ()=> {
        setCityList(oldList => [cityName,...oldList])
    }
    return (
        <div>
            <h5>{cityList}</h5>
            <div className='row'>
                <div className='col-3'>
                    <input type='text' onChange={(event)=> cityChnage(event)} className='form-control' placeholder='Enter City' />
                </div>
                <div className='col-3'>
                    <input type='button' onClick={addCity} className='btn btn-success' value="add City" />
                </div>
            </div>
        </div>
    );
};

export default UseStateArray;