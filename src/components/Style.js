import React, { useState } from "react";

const Style = () => {
    const [div1BackColor,setDiv1Color] = useState('green');
    const [isActive,setActive] = useState(false);
    const div3Style = {
        "background-color":"teal",
        "color": 'white',
        "font-size" :"34px"
    }
    const chnageDiv1Green =(color) => {
        setDiv1Color(color)
    }
    const onActiveChange = (event) => {
        setActive(event.target.checked)
    }
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <div className="p-3" style={{"background-color": div1BackColor, "color": 'white','font-size':'19px'}}>
            div1
        </div>
        </div>
        <div className="col-3">
          <div className="p-3" style={{'background-color': isActive == true ? 'yellow' : 'orange'}}>div 2</div>
        </div>
        <div className="col-3">
          <div style={div3Style}>div 3</div>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row">
        <div className="col-3">
          <button className="btn btn-success" onClick={()=>chnageDiv1Green('green')}>Add Green</button>
          <button className="btn btn-danger" onClick={()=>chnageDiv1Green('red')}>Add Red</button>
        </div>
        <div className="col-3">
          <input type="checkbox" onChange={(event)=> onActiveChange(event)}/>
        </div>
        <div className="col-3">
          <div>div 3</div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Style;
