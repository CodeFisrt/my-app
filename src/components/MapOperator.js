import React, { useState } from 'react';

const MapOperator = () => {
    const cityList = ['Pune', 'Mumbai', 'Nagpur','Jaipur'];
    const studentList = [
        {studId:1,name:'AAA',city:'Pune',rollNo:111},
        {studId:2,name:'BBB',city:'Jaipur',rollNo:112},
        {studId:3,name:'CCC',city:'Nagpur',rollNo:113},
        {studId:4,name:'DDD',city:'Mumbai',rollNo:114}
    ]
    const [selectedCity,setCity] = useState("");
    const chnageCity = (cityName) => {
        setCity(cityName)
    }
    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <ul>
                        {
                            cityList.map((city) => {
                               return (<li>{city}</li>) 
                            })
                        }
                    </ul>
                    <ul>
                        {
                            studentList.map((student)=>{
                                return (<li>{student.name} - {student.city}</li>)
                            })
                        }
                    </ul>
                </div>
                <div className="col-3">
                <select>
                  {
                    cityList.map((cityName)=> {
                        return (
                            <option>{cityName}</option>
                        )
                    })
                  }
                     </select> 
                  <select>
                    {
                        studentList.map((stud)=>{
                            return (<option value={stud.studId}>{stud.name}</option>)
                        })
                    }
                  </select>
                </div>
                <div className="col-3">
                    {
                       cityList.map((city)=> {
                        return (<button onClick={()=>chnageCity(city)}
                        className={`btn mx-2 ${selectedCity == city ? 'btn-success': 'btn-primary'}`} 
                          >{city}</button>)
                       }) 
                    }
                    <br/>
                    {selectedCity}
                </div>
                <div className="col-3">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Roll</th>
                            </tr>
                        </thead>
                        <tbody>
                             {
                                studentList.map((stud,index)=>{
                                    return (<tr>
                                        <td>{index+1}</td>
                                        <td>{stud.name}</td>
                                        <td>{stud.city}</td>
                                        <td>{stud.rollNo}</td>
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

export default MapOperator;