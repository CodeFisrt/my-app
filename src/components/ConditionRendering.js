import React, { useState } from 'react';

const ConditionRendering = () => {
    const [isDiv1Visiable,setDiv1] = useState(true);
    const [isDiv2Visiable, setdiv2] = useState(false);

    const [num1, setnum1] = useState("");
    const [num2, setnum2] = useState("");

    const chnagenum1 = (event) => {
        setnum1(event.target.value)
    }
    const chnagenum2 = (event) => {
        setnum2(event.target.value)
    }

    const chnageDiv1 = (isHide) => {
        setDiv1(isHide)
    }
    const chnageDiv2 = () => {
        setdiv2(!isDiv2Visiable)
    }
    return (
        <div>
            <div className="row">
                        <div className="col-4">
                            {
                                isDiv1Visiable == true &&  <div className="bg-success p-4 rounded" id="div1">
                                                Div 1
                                         </div>
                            }
                           
                        </div>
                        <div className="col-4">
                            {
                                isDiv2Visiable  &&  <div className="bg-secondary p-4 rounded" id="div2">
                                Div 2
                            </div>
                            }
                            
                        </div>
                        <div className="col-4">
                             -{(num1 == num2 && isDiv2Visiable ) || isDiv1Visiable ?'true':'false'}
                            {
                                ((num1 == num2 && isDiv2Visiable) || isDiv1Visiable) &&  <div className="bg-primary p-4 rounded" id="div3">
                                Div 3
                            </div>
                            }
                           
                        </div>
                    </div>
                    <div className="row pt-4 text-center">
                        <div className="col-4">
                            <button className="btn btn-success btn-sm" onClick={ () => chnageDiv1(true) } id="btnDiv1Show" >Show </button>
                            <button className="btn btn-danger btn-sm" onClick={ () => chnageDiv1(false) } id="btnDiv1Hide"> Hide </button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-success btn-sm"  onClick={chnageDiv2}>Show / Hide </button>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" className="form-control" onChange={(event)=>chnagenum1(event)} id="txtNum1" placeholder="Enter Num1"/>
                                </div>
                                <div className="col-6">
                                    <input type="text" className="form-control" onChange={(event)=>chnagenum2(event)} id="txtNum2" placeholder="Enter Num2"/>
                                </div>
                            </div>

                        </div>
                    </div>
        </div>
    );
};

export default ConditionRendering;