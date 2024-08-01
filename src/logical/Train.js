import React, { useState } from 'react';

const Train = () => {
    const [bookingObj,setBooking] = useState({date: '',fromStation:'',toStation:''});

    const updateForm = (event,key) => {
        setBooking(oldobj => ({...oldobj, [key]:event.target.value}))
    }
    const searchTrain = () => {
        if(bookingObj.date == '' || bookingObj.fromStation == '' || bookingObj.toStation == '') {
            alert("Please Select Journty Details")
        } else {
            if(bookingObj.fromStation == bookingObj.toStation) {
                alert("From n To Statison can't be same")
            } else {
                alert('Train Avaialebl')
            }
           
        }
    }
    return (
        <div>
            <p>{JSON.stringify(bookingObj)}</p>
            <div className="row">
                        <div className="col-3">
                            <label for="">Journey Date</label>
                            <input type="date" onChange={(event)=> updateForm(event,'date')} id="txtDate" className="form-control"/>
                        </div>
                        <div className="col-3">
                            <label for=""> From Station</label>
                            <select onChange={(event)=> updateForm(event,'fromStation')}  className="form-control">
                                <option value="">From Station</option>
                            <option value="Pune"> Pune</option><option value="Mumbai"> Mumbai</option><option value="Jalgao"> Jalgao</option><option value="Nagpur"> Nagpur</option><option value="Thane"> Thane</option></select>
                        </div>
                        <div className="col-3">
                            <label for=""> To Station</label>
                            <select onChange={(event)=> updateForm(event,'toStation')}  className="form-control">
                                <option value="">To Station</option>
                            <option value="Pune"> Pune</option><option value="Mumbai"> Mumbai</option><option value="Jalgao"> Jalgao</option><option value="Nagpur"> Nagpur</option><option value="Thane"> Thane</option></select>
                        </div>
                        <div className="col-3">
                            <button onClick={searchTrain} className="btn btn-sm btn-primary mt-4" id="btnSearch">Search</button>
                            <button className="btn btn-sm btn-success mt-4" id="btnClear">Clear</button>
                        </div>
                        <div className="col-3">
                            <label for="">Journey Date : <b>{}</b></label>
                            
                        </div>
                    </div>
        </div>
    );
};

export default Train;
