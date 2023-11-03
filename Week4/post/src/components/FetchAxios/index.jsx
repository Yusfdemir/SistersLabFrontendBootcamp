import React, { useEffect, useState } from 'react'
import axios from "axios"

const FetchAxios = () => {
    const[fetchData,setFetchData]=useState(null)
    const[axiosData,setAxiosData]=useState(null)
    const[loadingFetch,setLoadingFetch]=useState(true)
    const[loadingAxios,setLoadingAxios]=useState(true)
    

    useEffect(()=>{
        fetch("https://dummyjson.com/posts/1")
            .then(response=>response.json())
            .then(data=>{
                setFetchData(data)
                setLoadingFetch(false)
            })
            .catch(err=>alert("Fetch Data Error"))

       axios("https://dummyjson.com/posts/1")
            .then(data=>{
                setAxiosData(data)
                setLoadingAxios(false)
            })
            .catch(err=>alert("Axios Data Error"))
    },[])
    
  
    return (
    <div>
        <div>
            <h3>Using Fetch</h3>
            {loadingFetch ? (<div>Loading fetch...</div>) : (<div>{JSON.stringify(fetchData,null,2)}</div>)}    
        </div>
        <div>
            <h3>Using Axios</h3>
            {loadingAxios ? (<div>Loading axios...</div>) : (<div>{JSON.stringify(axiosData,null,2)}</div>)}
        </div>
    </div>
  )
}

export default FetchAxios