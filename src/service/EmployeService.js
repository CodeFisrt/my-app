import axios from 'axios';


const getParentDepartments = async () => {
    debugger;
    const result =  await axios.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment")
    debugger;
    return result.data;
}

export {getParentDepartments}