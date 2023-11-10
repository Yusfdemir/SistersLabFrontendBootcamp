import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { fetchUsers } from '../api'
import UserCard from '@/components/UserCard'
import { Stack, Typography } from '@mui/material'

const Directory = () => {
    const [users,setUsers]=useState([])
    const [directory,setDirectory]=useState([])
    useEffect(()=>{
        getUsers();
        const storedDirectory=localStorage.getItem("directory");
        if(storedDirectory){
            setDirectory(JSON.parse(storedDirectory))
        }
    },[])

    const getUsers=async()=>{
        const users=await fetchUsers();
        setUsers(users)
    }

    const personsInDirectory=users.filter((user)=>directory.includes(user.id))

    const handleDirectory=useCallback((id)=>{
        const newDirectory=directory.includes(id)?directory.filter((userId)=>userId !== id):
        [...directory,id]

        setDirectory(newDirectory)
        localStorage.setItem("directory",JSON.stringify(newDirectory))
    },[directory])

    const IsInDirectory=(id)=>directory.includes(id);

    const personCountInDirectory=useMemo(()=>{
        return users.filter((user)=>directory.includes(user.id)).length;
    },[directory,users])
    return (

    <Stack spacing={2}>
    <Typography variant="h3">Your Telephone Directory</Typography>
    <Typography> Number of person: {personCountInDirectory}</Typography>
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
    >
      {personsInDirectory.map((person) => (
        <UserCard 
            key={person.id}
            user={person}
            handleDirectory={handleDirectory}
            IsInDirectory={IsInDirectory}
        />
      ))}
    </Stack>
  </Stack>
  )
}

export default Directory