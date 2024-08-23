import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { getParentDepartments } from '../service/EmployeService';
const ChildDepartment = () => {
    const [childDeptList,setChuildList ] = useState([])
    const [parentDeptList,setparentList ] = useState([])
    const [childDept,setChildDept]= useState({
        "childDeptId": 0,
        "parentDeptId": 0,
        "departmentName": ""
      })

      useEffect(()=>{
        getAllChildDepartment();
        getAllParentDepartment();
    },[]);

    const getAllChildDepartment = async () => {
        const res = await axios.get("https://projectapi.gerasim.in/api/Complaint/GetAllChildDepartment");
        setChuildList(res.data.data)
    }
    const getAllParentDepartment = async () => {
       getParentDepartments().then(res=> {
        setparentList(res)
       })
        
    }

    const updateForm = (event, key) => {
        setChildDept(oldObj => ({ ...oldObj, [key]: event.target.value }))
    }
   
    const addChildDept = async () => { 
        const res = await axios.post("https://projectapi.gerasim.in/api/Complaint/AddChildDepartment", childDept);
        if (res.data.result) {
            alert("Dept Created Succees")
            getAllChildDepartment();
        } else {
            alert(res.data.message)
        }
    }
    return (
        <div>
            <div className='row'>
                <div className='col-6'>
                    <div className='row'>
                    <div className='col-4'>
                            <lable>Select Parent Dept</lable>
                            <select className='form-select' onChange={(event) => updateForm(event, 'parentDeptId')}>
                                <option>Select Parent Dept</option> 
                                {
                                    parentDeptList.map((item)=>{
                                        return(<option value={item.departmentId}> {item.departmentName}</option>)
                                    })
                                }
                            </select>
                           
                        </div>
                        <div className='col-4'>
                            <lable>Child Dept Name</lable>
                            <input type='text' onChange={(event) => updateForm(event, 'departmentName')} className='form-control' />
                        </div>
                       
                        <div className='col-4'>
                            <input type='button' onClick={addChildDept} className='btn btn-success' value="Add Dpet" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>SrNo</th>
                                        <th>Parent Id</th>
                                        <th>Parent Dept NAme</th>
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        childDeptList.map((item,index)=> {
                                            return (<tr>
                                                <td>{index+1}</td>
                                                <td>{item.parentDeptId}</td>
                                                <td>{item.departmentName}</td>
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

export default ChildDepartment;