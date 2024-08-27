import axios from 'axios';
import React, { useState } from 'react';

const User = () => {

    const [userList,setUser]= useState([]);
    const [userObj,setUserObj] = useState({
        "userId": 0,
        "userName": "",
        "emailId": "",
        "fullName": "",
        "role": "",
        "createdDate": new Date(),
        "password": "",
        "projectName": "",
        "refreshToken": "",
        "refreshTokenExpiryTime":new Date()
    })
    const [errors,setErrors]= useState({});

    const updateForm = (event, key) => {
        setUserObj(oldData=>({...oldData,[key]:event.target.value}))
    }

    const loadData = async () => {
        const result =  await axios.get("https://projectapi.gerasim.in/api/BudgetPlanner/GetAllUsers");
        setUser(result.data.data)
    }

    const validateForm = () => {
        let formErrors = {};
        if (userObj.userName == '') {
            formErrors.userName = 'Username is required';
        } 
        if (!userObj.password) formErrors.password = 'Password is required';
        return formErrors;
      };

    const saveUser =  async () => {
        const errors =  validateForm();
        if(Object.keys(errors).length == 0) {
            setErrors({})
            const result = await axios.post("https://projectapi.gerasim.in/api/BudgetPlanner/AddNewuser",userObj);
            debugger;
            if(result.data.result) {
                alert("User Created Success");
                loadData();
            } else {
                alert(result.data.message)
            }
        } else {
            setErrors(errors)
        }
        debugger;
        
    }

    const updateUser = async () => { 
        const result = await axios.post("https://projectapi.gerasim.in/api/BudgetPlanner/UpdateUser",userObj);
        debugger;
        if(result.data.result) {
            alert("User Updated Success");
            loadData();
        } else {
            alert(result.data.message)
        }
    }
    const onDelete = async (id) => {
        const isDelete =  window.confirm("Are you sure want to delet");
        debugger;
        if(isDelete) {
            const result = await axios.delete("https://projectapi.gerasim.in/api/BudgetPlanner/DeleteUserByUserId?userId="+id);
            debugger;
            if(result.data.result) {
                alert("User Deleted Success");
                loadData();
            } else {
                alert(result.data.message)
            }
        }
        
    }
    const onEdit = (data)=> {
        setUserObj(data);
    }
    return (
        <div>
            <div className='row'>
                <div className='col-8'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            User List <button onClick={loadData}>Load Data</button>
                        </div>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Sr No</th>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Full Name</th>
                                        <th>Project Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userList.map((user,index)=>{
                                            return (<tr>
                                                <td>{index+1}</td>
                                                <td>{user.userName}</td>
                                                <td>{user.emailId}</td>
                                                <td>{user.fullName}</td>
                                                <td>{user.projectName}</td> 
                                                <td>
                                                    <button onClick={()=> onEdit(user)} className='btn btn-primary'>Edit</button>
                                                    <button onClick={()=> onDelete(user.userId)} className='btn btn-danger'>Delete</button>
                                                </td> 
                                            </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            New User  
                        </div>
                        <div className='card-body'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <label>User Name</label>
                                        <input type='text' value={userObj.userName} onChange={(event)=>updateForm(event,'userName')} className='form-control'/>
                                        <div className='text-danger'>
                                        {
                                         errors.userName  &&  errors.userName 
                                       }
                                        </div>
                                      
                                       
                                        {/* <div className='text-danger'>
                                            {
                                                userObj.userName == '' && <span>This Is Required</span>
                                            }
                                             {
                                                userObj.userName !== '' && userObj.userName.length <= 5  && <span>Min 5 Char Required</span>
                                            } 
                                        </div>  */}
                                    </div>
                                    <div className='col-6'>
                                        <label>Email Id</label>
                                        <input type='text' value={userObj.emailId} onChange={(event)=>updateForm(event,'emailId')} className='form-control'/>
                                    </div>
                                    <div className='col-6'>
                                        <label>Full nmame</label>
                                        <input type='text' value={userObj.fullName} onChange={(event)=>updateForm(event,'fullName')} className='form-control'/>
                                    </div>
                                    <div className='col-6'>
                                        <label>Role</label>
                                        <input type='text' value={userObj.role} onChange={(event)=>updateForm(event,'role')} className='form-control'/>
                                    </div>
                                    <div className='col-6'>
                                        <label>password</label>
                                        <input type='text' value={userObj.password} onChange={(event)=>updateForm(event,'password')} className='form-control'/>
                                        <div className='text-danger'>
                                        {
                                         errors.password  &&  errors.password 
                                       }
                                        </div>
                                        {/* <div className='text-danger'>
                                        {
                                            userObj.password == '' && <span>This Is Required</span>
                                        }
                                        </div> */}
                                        
                                    </div>
                                    <div className='col-6'>
                                        <label>Project Name</label>
                                        <input type='text' value={userObj.projectName} onChange={(event)=>updateForm(event,'projectName')} className='form-control'/>
                                    </div>
                                    
                                    
                                </div>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                      <button   className='btn btn-success mx-2' onClick={saveUser}>Save User</button>
                                        {/* {
                                           !( userObj.userName !== '' && userObj.userName.length >= 5 && userObj.password !== '')   &&  <button disabled className='btn btn-success mx-2' onClick={saveUser}>Save User</button>
                                        }
                                        {
                                            userObj.userName !== '' && userObj.userName.length >= 5 && userObj.password !== '' &&  <button  className='btn btn-success mx-2' onClick={saveUser}>Save User</button>
                                        } */}
                                         

                                         <button className='btn btn-warning' onClick={updateUser}>Update User</button>
                                         
                                        
                                       
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;