import React, { useState } from 'react';

const Event = () => {
    
    const [name, setName] = useState("Angular");

    const chnageName = (event) => {
        debugger
        setName(event.target.value)
    }
    const onCityChnage = (event) => {
        console.log(event.target.value)
    }
    const onCheckboxChnage = (event)=> {
        debugger;
        if(event.target.checked) {
            setName("")
        }
        console.log(event.target.checked)
    }

    const showAlert = () => {
        alert("Weolcome")
    }
    const showMessage = (msg) => {
        alert(msg)
    }

    return (
      <div>
        <div className="row">
          <div className="col-3">
            <input type='text' value={name} onChange={ (event) => chnageName(event)} className='form-control' />
          </div>
          <div className="col-3">
            <input type='checkbox' onChange={ (event) => onCheckboxChnage(event)} className='' />
          </div>
          <div className="col-3">
            <select onChange={(data)=> onCityChnage(data)}>
                <option>Pune</option>
                <option>Nagpur</option>
                <option>Mumbai</option>
                <option>Thane</option>
            </select>
          </div>
          <div className='col-3'>
            <h4>{name}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <button onClick={showAlert} className="btn btn-success">Show Alert </button>
          </div>
          <div className="col-3">
            <button onClick={() => showAlert()} className="btn btn-success">   Show Alert  </button>
          </div>
          <div className="col-3">
            <button  onClick={() => showMessage("THis i sReact ")}  className="btn btn-success">Show Alert</button>
          </div>
          <div className="col-3">
            <button onClick={() => showMessage("THis is Angular ")}  className="btn btn-success" > Show Alert </button>
          </div>
        </div>
      </div>
    );
};

export default Event;