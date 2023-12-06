import { Box, Card, CardContent, CardMedia, Rating, Typography, styled } from '@mui/material'
import { useRouter } from 'next/router';
import { PriceDisplay } from '../style/style';

// const PriceDisplay = styled(Box)(({ theme }) => ({
//     fontWeight: 'bold',
//     marginTop: theme.spacing(1),
// }));

const CardItem = ({product}) => {
    const router=useRouter()
  return (
    <Card 
        sx={{ maxWidth: 345, cursor: 'pointer' }}
        onClick={() => router.push(`/products/${product.id}`)}
    >
        <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div">
            {product.title}
        </Typography>
        <PriceDisplay>${product.price}</PriceDisplay>
        <Box
            sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 2,
            }}
        >
            <Rating
            name="read-only"
            value={product.rating.rate}
            readOnly
            />
            <Typography variant="body2" color="text.secondary">
            ({product.rating.count} reviews)
            </Typography>
        </Box>
        </CardContent>
    </Card>
  )
}

export default CardItem