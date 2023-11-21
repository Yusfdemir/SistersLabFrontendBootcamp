import {
  Button,
  Grid,
  Stack,
} from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import BookItem from "../components/BookItem.jsx"



export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.error('error :>> ', error));
  }, [books]);

  return (
    <Grid container spacing={2} sx={{paddingTop:"15px"}}>
      
      {books &&
        books.map((book) => (
          <BookItem key={book.id} book={book}/>
        ))}
        
          <Stack 
            width={"100%"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{marginTop:"20px"}}>
            <Link href="/add-book">
              <Button variant="contained" color="primary">
                Add Book
              </Button>
            </Link>
          </Stack>
    </Grid>
  );
}
