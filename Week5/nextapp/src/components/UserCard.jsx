import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import IsSkeleton from './IsSkeleton'
import PortraitIcon from '@mui/icons-material/Portrait';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const UserCard = ({
    user,loading,handleDirectory,IsInDirectory,handleClick
}) => {
  return (
    <Card key={user.id} sx={{width:"250px"}}>
        <IsSkeleton loading={loading} width={75} height={75} variant='rectangular'>
            <CardMedia sx={{display:"flex", justifyContent:"center"}}>
                <PortraitIcon sx={{fontSize:"75px"}}/>
            </CardMedia>
        </IsSkeleton>
        <CardContent>
            <IsSkeleton loading={loading} width="80%">
                <Typography variant='h5' component="div">
                    {user.name}
                </Typography>
            </IsSkeleton>
            <IsSkeleton loading={loading} width="80%">
                <Typography variant='body1' component="div">
                    {`${user.address.street} / ${user.address.city}`}
                </Typography>
            </IsSkeleton>
            <IsSkeleton loading={loading} width="80%">
                <Typography variant='body2' component="div">
                    {user.phone}
                </Typography>
            </IsSkeleton>
            <IsSkeleton loading={loading} width="80%">
                <Typography variant='body2' component="div">
                    {user.email}
                </Typography>
            </IsSkeleton>
            
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"space-between"}}>

            <IconButton
                onClick={()=>{handleDirectory(user.id)}}
            >
                <IsSkeleton loading={loading} width={30}>
                    {IsInDirectory(user.id)?
                        (<PersonRemoveIcon color='error'/>)
                        :(<PersonAddIcon color='success'/>  )             
                    }

                </IsSkeleton>
            </IconButton>
            <Button 
                size='small'
                variant='text'
                onClick={()=>handleClick(user.id)}
            >Details</Button>
            
        </CardActions>
    </Card>
  )
}

export default UserCard