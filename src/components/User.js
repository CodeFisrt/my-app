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

    const updateForm = (event, key) => {
        setUserObj(oldData=>({...oldData,[key]:event.target.value}))
    }

    const loadData = async () => {
        const result =  await axios.get("https://projectapi.gerasim.in/api/BudgetPlanner/GetAllUsers");
        setUser(result.data.data)
    }
    const saveUser =  async () => {
        debugger;
        const result = await axios.post("https://projectapi.gerasim.in/api/BudgetPlanner/AddNewuser",userObj);
        debugger;
        if(result.data.result) {
            alert("User Created Success");
            loadData();
        } else {
            alert(result.data.message)
        }
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
                            New User - {JSON.stringify(userObj)}
                        </div>
                        <div className='card-body'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <label>User Name</label>
                                        <input type='text' onChange={(event)=>updateForm(event,'userName')} className='form-control'/>
                                    </div>
                                    <div className='col-6'>
                                        <label>Email Id</label>
                                        <input type='text' onChange={(event)=>updateForm(event,'emailId')} className='form-control'/>
                                    </div>
                                    <div className='col-6'>
                                        <label>Full nmame</label>
                                        <input type='text' onChange={(event)=>updateForm(event,'fullName')} className='form-control'/>
                                    </div>
                                    <div className='col-6'>
                                        <label>Role</label>
                                        <input type='text' onChange={(event)=>updateForm(event,'role')} className='form-control'/>
                                    </div>
                                    <div className='col-6'>
                                        <label>password</label>
                                        <input type='text' onChange={(event)=>updateForm(event,'password')} className='form-control'/>
                                    </div>
                                    <div className='col-6'>
                                        <label>Project Name</label>
                                        <input type='text' onChange={(event)=>updateForm(event,'projectName')} className='form-control'/>
                                    </div>
                                    
                                    
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <button className='btn btn-success' onClick={saveUser}>Save User</button>
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