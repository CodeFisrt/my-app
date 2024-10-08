import React from "react";

const Alert = (props) => { 
  return (
    <div>
      <div className={`alert ${props.alertClassName}`}>
        <strong>{props.alertType}!</strong> {props.message}
      </div>
    </div>
  );
};

export default Alert;
