import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Stack,
    Typography,
  } from '@mui/material';
  import Link from 'next/link';
  import axios from 'axios';
  import { useRouter } from 'next/router';
import { useCallback } from 'react';

const BookItem = ({book,books,setBooks}) => {
    //const router=useRouter()
    const handleDelete = useCallback(
      (id) => {
        axios
          .delete(`http://localhost:3001/books/${id}`)
          .then(() => {
            setBooks(books.filter((book) => book.id !== id));
          })
          .catch((error) => console.error(error));
      },
      [books]
    );
    // const handleDelete=(id)=>{
    //     axios.delete(`http://localhost:3001/books/${id}`)
    //     .then(res=>{
    //         alert("Book has been deleted")
    //         router.push("/")
    //     }).catch(err=>console.log(err))
    // }
  return (
    <Grid item  xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={book.imageUrl ?? 'https://picsum.photos/200/300'}
                  alt={book.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.description}...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href={`/books/${book.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button variant="contained" size="small">
                      Details
                    </Button>
                  </Link>
                  <Link
                    href={`/edit-books/${book.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button variant="outlined" size="small">
                      Edit
                    </Button>
                  </Link>

                  <Stack sx={{marginLeft:"auto"}}>
                    <Button 
                     variant="contained" 
                     color='error' 
                     size="small"
                     onClick={()=>{handleDelete(book.id)}}
                     >
                      Delete
                    </Button>
                  
                  </Stack>

                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
  )
}

export default BookItem