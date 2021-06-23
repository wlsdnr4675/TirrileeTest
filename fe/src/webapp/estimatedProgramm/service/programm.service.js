import axios from 'axios';


const SERVER = 'http://localhost:8080'


const programmresult = (programmId) => {
    return axios({
        url: `${SERVER}/programm/read/${programmId}`,
        method: 'get',
        headers:{
        }
    })
};

const programmRegister = (data) => {
    return axios({
        url: `${SERVER}/programm/register`,
        method: 'post',
        data : data,
        headers:{
        }
    })
};

export default {programmresult, programmRegister} 

