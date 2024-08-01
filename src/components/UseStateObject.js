import React, { useState } from 'react';

const UseStateObject = () => {

    const [address,setAddress] = useState({name:'',city:'',state:'',pincode:''});

    const resetobj =  () => {
        setAddress({name:'',city:'',state:'',pincode:''})
    }

    const updateForm = (event,key) => {
        setAddress(currentData => ({...currentData, [key]: event.target.value}))
    }

    const onNameChnage = (event) => {
        setAddress(currentData => ({...currentData, name: event.target.value}))
    }
    const onCityChnage = (event) => {
        setAddress(currentData => ({...currentData, city:event.target.value}))
    }
    const onStateChnage = (event) => {
        setAddress(currentData => ({...currentData, state:event.target.value}))
    }
    const onpinodeChnage = (event) => {
        setAddress(currentData => ({...currentData, pincode:event.target.value}))
    }
    return (
        <div>
            <p> {JSON.stringify(address)}</p>
            <div className='row'>
                <div className='col-3'>
                    <label>Name</label>
                    <input type='text' onChange={(event)=> updateForm(event,'name')} className='form-control' />
                </div>
                <div className='col-3'>
                    <label>City</label>
                    <input type='text' onChange={(event)=>updateForm(event,'city')} className='form-control' />
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <label>State</label>
                    <input type='text' onChange={(event)=> updateForm(event,'state')} className='form-control' />
                </div>
                <div className='col-3'>
                    <label>Pin code </label>
                    <input type='text' onChange={(event)=> updateForm(event,'pincode')} className='form-control' />
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <button onClick={resetobj} className='btn btn-success'>Reset</button>
                </div>
                </div>

        </div>
    );
};

export default UseStateObject;