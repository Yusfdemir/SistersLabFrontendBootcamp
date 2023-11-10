import {useState,useEffect} from 'react'
import { fetchUser } from '@/pages/api'
import { useRouter } from 'next/router'
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import IsSkeleton from '@/components/IsSkeleton';
import PortraitIcon from '@mui/icons-material/Portrait';

const UserDetail = () => {
    const router=useRouter();
    const {id}=router.query;
    const [user,setUser]=useState(null)

    const getUser=async()=>{
        const userResponse=await fetchUser(id);
        setUser(userResponse)
    }
    useEffect(()=>{
        if(id){
            getUser()
        }
    },[id])

    return (
    <Stack sx={{paddingTop:"100px"}}
        alignItems="center"
        justifyContent="center"
    >
        {/* {JSON.stringify(user.name)} */}
       <Card key={user?.id} sx={{width:"500px"}}>
        <IsSkeleton loading={!user} width={75} height={75} variant='rectangular'>
            <CardMedia sx={{display:"flex", justifyContent:"center"}}>
                <PortraitIcon sx={{fontSize:"75px"}}/>
            </CardMedia>
        </IsSkeleton>
        <CardContent>
            <IsSkeleton loading={!user} width="80%">

                <Typography variant='h5' component="div">
                   <strong>Name :</strong> {user?.name}
                </Typography>
            </IsSkeleton>
            <IsSkeleton loading={!user} width="80%">
                <Typography variant='body1' component="div">
                    <strong>Address :</strong> {`${user?.address.street} ,${user?.address.suite} ${user?.address.city}`}
                </Typography>
            </IsSkeleton>
            <IsSkeleton loading={!user} width="80%">
                <Typography variant='subtitle2' component="div">
                  <strong>Zip Code :</strong> {user?.address.zipcode}
                </Typography>
            </IsSkeleton>
            <IsSkeleton loading={!user} width="80%">
                <Typography variant='body2' component="div">
                    <strong>Phone Number :</strong> {user?.phone}
                </Typography>
            </IsSkeleton>
            <IsSkeleton loading={!user} width="80%">
                <Typography variant='body2' component="div">
                    <strong>Email :</strong> {user?.email}
                </Typography>
            </IsSkeleton>
            <IsSkeleton loading={!user} width="80%">
                <Typography variant='body2' component="div">
                    <strong>Website :</strong> {user?.website}
                </Typography>
            </IsSkeleton>
            <IsSkeleton loading={!user} width="80%">
                <Typography variant='body2' component="div">
                    <strong>Company :</strong> {user?.company.name}
                </Typography>
            </IsSkeleton>
        </CardContent>
        </Card>
    </Stack>
  )
}

export default UserDetail
