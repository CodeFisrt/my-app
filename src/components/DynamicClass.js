import React, { useState } from "react";


const DynamicClass = () => {
    const [div1Color,setDiv1]= useState("");
    const [isActive, setActive] = useState(false);

const changeDiv1 = (color) => {
    setDiv1(color)
}
const changeActive = (event) => {
    setActive(event.target.checked)
}
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <div className={`p-3 ${div1Color}`}>div1</div>
        </div>
        <div className="col-3">
          <div className={`p-3 ${isActive == true ? 'bg-warning' : 'bg-secondary'}`}>div 2</div>
        </div>

      </div>
      <div className="row">
        <div className="col-3">
          <button className="btn btn-success"  onClick={()=>changeDiv1('bg-success')} >Add Green</button>
 
          <button className="btn btn-danger" onClick={()=>changeDiv1('bg-danger')}>Add Red</button>
        </div>
        <div className="col-3">
          <input type="checkbox" onChange={(event)=> changeActive(event)} />
        </div>
        <div className="col-3">
          <div>div 3</div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default DynamicClass;
