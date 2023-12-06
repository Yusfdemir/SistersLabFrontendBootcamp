import { Card, CardContent, Skeleton } from '@mui/material'

const CardSkeleton = () => {
  return (
    <Card sx={{ width: '345px' }}>
        <Skeleton variant="rectangular" width="100%" height={140} />
        <CardContent>
        <Skeleton variant="text" height={140} />
        <Skeleton variant="text" width="60%" />
        </CardContent>
    </Card>
  )
}

export default CardSkeleton