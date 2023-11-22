import {
  Button,
  Grid,
  Stack,
  TextField,
} from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import BookItem from "../components/BookItem.jsx"



export default function Home() {
  const [books, setBooks] = useState([]);
  const [search,setSearch]=useState("")

  useEffect(() => {
    axios
      .get('http://localhost:3001/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.error('error :>> ', error));
  }, [books]);

  const handleSearch = useCallback(() => {
    axios
      .get(`http://localhost:3001/books?q=${search}`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.log('error :>> ', error));
  }, [search]);

  return (
    <Grid container spacing={2} sx={{paddingTop:"15px"}}>
       <Stack direction="row" justifyContent="center" alignItems="center" width="100%" sx={{marginY:"15px"}}>
        <TextField
          label="Search Books"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
      {books &&
        books.map((book) => (
          <BookItem key={book.id} book={book} books={books} setBooks={setBooks}/>
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
