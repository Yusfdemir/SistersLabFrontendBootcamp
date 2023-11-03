import { useEffect, useState } from "react";
import { fetchCharacters } from "../api";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CardItem from "@/components/CardItem";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const getCharacters = async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const handleCharacterSelect = (e) => {
    setSelectedCharacter(e.target.value);
    console.log(selectedCharacter)
  };

//   const filteredCharacters = selectedCharacter
//     ? characters.filter((character) => character.id === selectedCharacter.id)
//     : characters;

    const filteredCharacters = selectedCharacter
    ? characters.filter((character) => character.name.toString().toLowerCase().includes(selectedCharacter.toLowerCase().trim()))
    : characters;

  return (
    <Stack spacing={2}>
        {/* <Autocomplete
        id="combo-box"
        options={characters}
        getOptionLabel={(character) => character.name}
        onChange={handleCharacterSelect}
        sx={{ width: 300 }}
        size="small"
        renderInput={(params) => <TextField {...params} label="Character" />}
      /> */}
       <TextField
          id="outlined-select-currency"
          label="Enter character name"
          value={selectedCharacter}
          onChange={handleCharacterSelect}
        >
        </TextField>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        {filteredCharacters.map((character) => (
          <CardItem key={character.id}  character={character}/>
        ))}
      </Stack>
    </Stack>
  );
};

export default Characters;
