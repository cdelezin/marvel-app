
import { useEffect } from 'react';
import characters from '../data/characters.json';
import CharactersList from '../components/CharactersList';
import NumberOfCharacters from '../components/NumberOfCharacters';

function CharactersPage() {
  useEffect(() => {
    document.title = 'Characters - Marvel App';
  }, []);

  return (
    <>
      <div>
        <h1>Marvel Characters</h1>
      </div>
      <NumberOfCharacters characters={characters} />
      <ul>
        <CharactersList characters={characters} />
      </ul>
    </>
  );
}

export default CharactersPage;