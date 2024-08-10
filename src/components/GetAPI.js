import axios from 'axios';
import React, { useState } from 'react';

const GetAPI = () => {
    const [userList,setUser]= useState([]);
    const [imageList,setImage] = useState([])
    const [propertyList,setproperty] = useState([])
    
    const getUsers = async () => {
        const result = await  axios.get("https://jsonplaceholder.typicode.com/users");
        debugger;
        setUser(result.data)
    }

    const getImages = async () => {
        const responce =  await axios.get("https://jsonplaceholder.typicode.com/photos");
        setImage(responce.data)
    }

    const getAllProperty =  async () => {
        const result = await axios.get("https://projectapi.gerasim.in/api/RealEstate/GetAllProperty");
        debugger;
        setproperty(result.data.data)
    }

    return (
        <div>
            <button className='btn btn-success' onClick={getUsers}>Get Users</button>
            <button className='btn btn-success' onClick={getImages}>Get Images</button>
            <button className='btn btn-success' onClick={getAllProperty}>Get Porperties</button>
            <div className='row'>
                <div className='col-3'>
                    <ul>
                        {
                            userList.map((item)=>{
                                return (<li>{item.username}</li>)
                            })
                        }
                    </ul>
                </div>
                <div className='col-3'>
                    {
                        imageList.map((img)=>{
                            return (<div> <img src={img.url}/> </div>)
                        })
                    }
                </div>
                <div className='col-3'>
                   <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>title</th>
                            <th>Des</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            propertyList.map((item,index)=>{
                                return (<tr>
                                    <td>{index+1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.propertyType}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                   </table>
                </div>
            </div>
            
        </div>
    );
};

export default GetAPI;