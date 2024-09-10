import React from 'react';
import { useParams } from 'react-router-dom';

const AddUser = () => {
    const {userId} = useParams();
    debugger

    return (
        <div>
             <div className='col-4'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            New User  -{userId} 
                        </div>
                        <div className='card-body'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <label>User Name</label>
                                        <input type='text'  className='form-control'/>
                                        <div className='text-danger'>
                                        
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
                                        <input type='text'   className='form-control'/>
                                    </div>
                                    <div className='col-6'>
                                        <label>Full nmame</label>
                                        <input type='text'   className='form-control'/>
                                    </div>
                                    <div className='col-6'>
                                        <label>Role</label>
                                        <input type='text'  className='form-control'/>
                                    </div>
                                    <div className='col-6'>
                                        <label>password</label>
                                        <input type='text'  className='form-control'/>
                                        <div className='text-danger'>
                                        
                                        </div>
                                        {/* <div className='text-danger'>
                                        {
                                            userObj.password == '' && <span>This Is Required</span>
                                        }
                                        </div> */}
                                        
                                    </div>
                                    <div className='col-6'>
                                        <label>Project Name</label>
                                        <input type='text'  className='form-control'/>
                                    </div>
                                    
                                    
                                </div>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                      <button   className='btn btn-success mx-2'  >Save User</button>
                                        

                                         <button className='btn btn-warning' >Update User</button>
                                         
                                        
                                       
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
        </div>
    );
};

export default AddUser;