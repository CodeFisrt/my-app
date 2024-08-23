import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Alert from '../reusableComponent/Alert';
import ProgressBar from '../reusableComponent/ProgressBar';
import { getParentDepartments } from '../service/EmployeService';

const Department = () => {
    const [parentDeptList,setParent] = useState([])
    const [parentObj, setParentObj] = useState({
        "departmentId": "asd",
        "departmentName": "",
        "departmentLogo": ""
    });

    useEffect(()=>{
        getParentDept();
    },[]);

    const getParentDept = async () => {
        debugger;
        getParentDepartments().then(res=>{
            debugger;
            setParent(res)
        })
        
    }

    const updateForm = (event, key) => {
        setParentObj(oldObj => ({ ...oldObj, [key]: event.target.value }))
    }
   
    const addDept = async () => {
      try {
        const res = await axios.post( "https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",parentObj );
        if (res.data.result) {
          alert("Dept Created Succees");
          getParentDept();
        } else {
          alert(res.data.message);
        }
      } catch (error) {
        debugger;
        if(error.response.status == 400) {
            alert("Please check Form Value "+ JSON.stringify(error.response.data))
        } else if (error.response.status ==500) {
            alert("API Error")
        }
      }
    };
    return (
        <div>
            <Alert message="Welcome to Dept Compoennt" alertClassName="alert-success" alertType="Success" />
           <ProgressBar progress="40"></ProgressBar>
           <div className='row'>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-4'>
                            <lable>Parent Dept Name</lable>
                            <input type='text' onChange={(event) => updateForm(event, 'departmentName')} className='form-control' />
                        </div>
                        <div className='col-4'>
                            <lable>Parent Dept Logo</lable>
                            <input type='text' onChange={(event) => updateForm(event, 'departmentLogo')} className='form-control' />
                        </div>
                        <div className='col-4'>
                            <input type='button' onClick={addDept} className='btn btn-success' value="Add Dpet" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>SrNo</th>
                                        <th>Parent Dept NAme</th>
                                        <th>Logo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        parentDeptList.map((item,index)=> {
                                            return (<tr>
                                                <td>{index+1}</td>
                                                <td>{item.departmentName}</td>
                                                <td>{item.departmentLogo}</td>
                                            </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Department;