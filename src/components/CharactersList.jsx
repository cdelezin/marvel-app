function CharactersList({ characters = [] }) {

  return characters.map(character => <li key={character.id}>{character.name}</li>);
}

export default CharactersList;
