import React from "react";

const Loader = (props) => {
  return (
    <div>
      <div>
        <div className={`spinner-border ${props.loaderClass}`}></div>
        <div className={`spinner-border ${props.loaderClass}`}></div>
        <div className={`spinner-border ${props.loaderClass}`}></div>
        <div className={`spinner-border ${props.loaderClass}`}></div>
        <div className={`spinner-border ${props.loaderClass}`}></div>
        <div className={`spinner-border ${props.loaderClass}`}></div>
        <div className={`spinner-border ${props.loaderClass}`}></div>
        <div className={`spinner-border ${props.loaderClass}`}></div>
        <div className={`spinner-border ${props.loaderClass}`}></div>
      </div>
    </div>
  );
};

export default Loader;
