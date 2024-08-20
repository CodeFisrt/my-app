import React from "react";

const ProgressBar = (props) => {
  return (
    <div>
      <div className="progress">
        <div className="progress-bar" style={{'width':`${props.progress}%`}}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
