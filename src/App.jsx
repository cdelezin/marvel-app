import './App.css'
import characters from './data/characters.json'
import CharactersList from './components/CharactersList'
import NumberOfCharacters from './components/NumberOfCharacters'

function App() {
  return (
    <>
      <div>
        <h1>Hello World from react with JSX</h1>
      </div>
      <NumberOfCharacters characters={characters} />
      <ul>
        <CharactersList characters={characters} />
      </ul>
    </>
  );
}

export default App;