import axios from 'axios'

const baseURL="https://jsonplaceholder.typicode.com";

const axiosInstance=axios.create({
    baseURL,
})

export const fetchUsers=async()=>{
    const response=await axiosInstance.get('/users');
    return response.data;
}

export const fetchUser = async(id)=>{
    const response= await axiosInstance.get(`/users/${id}`)

    return response.data
}