import React, { useState } from 'react';

const PlanSelection = () => {
    const [selectedPlan,setPlan] = useState("");
    const [seleectdPlanName,setPlanNameInfo] =  useState("")

    const chnagePlan = (event) => {
        setPlan(event.target.value)
    }
    const setPlanName = (planName)=> {
        setPlan(planName)
    }

    const setPlanNameTitle = () => {
        setPlanNameInfo(selectedPlan)
    }
    return (
        <div> 
            <div className='row'>
                <div className='col-6'>
                <div className="row text-center">
                        <div classNameName="col-md-3">
                            <label>Broadband</label> <br/>
                            <input type="radio" onChange={()=>setPlanName('Broadband')} name="radioCheck" id="radio1" value="Broadband"/>
                        </div>
                        <div className="col-md-3">
                            <label>Broadband n Tv</label><br/>
                            <input type="radio" onChange={()=>setPlanName('Broadband n Tv')} name="radioCheck" id="radio2" value="Broadband n Tv"/>
                        </div>
                        <div className="col-md-3">
                            <label>Fibre Optics </label><br/>
                            <input type="radio" onChange={(event)=>chnagePlan(event)} name="radioCheck" id="radio3" value="Fibre Optics"/>
                        </div>
                        <div className="col-md-3">
                            <label>Mobile Plan </label><br/>
                            <input type="radio" onChange={(event)=>chnagePlan(event)} name="radioCheck" id="radio4" value="Mobile Plan"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 text-end">
                            <button className="btn btn-success btn-sm" onClick={setPlanNameTitle} id="btnContinue"> Continue</button>
                        </div>
                        <div className="col-6 ">
                            <button className="btn btn-danger btn-sm" id="btnReset"> Reset</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 text-end">
                            Selected Plan Name : <h5>{seleectdPlanName}</h5>
                        </div>
                        
                    </div>
                </div>
                <div className='col-6'>
                <div className="row text-center pb-5">
                        <div className="col-4">
                            <div>
                                <i style={{'font-size': '150px'}} className="fa fa-mobile" aria-hidden="true"></i><br/>
                                Mobile
                            </div>
                            <button className="btn btn-primary mt-4" id="btnMobile">Find More</button>
                        </div>
                        <div className="col-4">
                            <div>
                                <i style={{'font-size': '150px'}} className="fa fa-home" aria-hidden="true"></i><br/>
                                JioFiber
                            </div>
                            <button className="btn btn-primary mt-4" id="btnFiber">Find More</button>
                        </div>
                        <div className="col-4">
                            <div>
                                <i style={{'font-size': '150px'}} className="fa fa-id-badge" aria-hidden="true"></i><br/>
                                Business
                            </div>
                            <button className="btn btn-primary mt-4" id="btnBusiness">Find More</button>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default PlanSelection;