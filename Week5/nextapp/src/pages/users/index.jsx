import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../api'
import { Stack, Typography } from '@mui/material'
import UserCard from '@/components/UserCard'
import { useRouter } from 'next/router'

const Users = () => {
    const router=useRouter()
    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(false)
    const [errorFetch,setErrorFetch]=useState(null)
    const [directory,setDirectory]=useState([])

    const fetchUsersData=()=>{
        setLoading(true);
        fetchUsers()
        .then(usersData=>{setUsers(usersData);console.log(usersData)})
        .catch(err=>setErrorFetch(err.message || "Something went wrong !!!"))
        .finally(()=>setLoading(false))
    }
    useEffect(()=>{
        fetchUsersData()
        const storedDirectory=localStorage.getItem('directory');
        // console.log("d in eff first",directory)
        // console.log("stDi",storedDirectory)
        if(storedDirectory){
            setDirectory(JSON.parse(storedDirectory))
        }
        console.log("d in eff last",directory)
    },[])

    const handleDirectory=(id)=>{
        const newDirectory=directory.includes(id)?directory.filter((personId)=>personId !== id):[...directory,id];

        setDirectory(newDirectory)
        localStorage.setItem('directory',JSON.stringify(newDirectory))
        console.log("directory",directory)
    }

    const IsInDirectory=(id)=>directory.includes(id)

    const handleClick=(id)=>{
        router.push(`/users/${id}`)
    }

    return (
    <Stack 
        spacing={{xs:1,sm:2}}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
    >
        {
            errorFetch ? (
                <Typography color="error">{errorFetch}</Typography>
            ):(users?.map(user=>(
                <UserCard 
                    key={user.id}
                    user={user} 
                    loading={loading}
                    handleDirectory={handleDirectory}
                    IsInDirectory={IsInDirectory}
                    handleClick={handleClick}
                />
                )))
        }
    </Stack>
  )
}

export default Users