import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {

    const history = useNavigate();
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
        debugger;
        history('/adduser/'+data.userId)
        setUserObj(data);
    }
    return (
        <div>
            <div className='row'>
                <div className='col-12'>
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
                
            </div>
        </div>
    );
};

export default User;