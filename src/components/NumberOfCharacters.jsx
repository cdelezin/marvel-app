

  function NumberOfCharacters({ characters = [] }) {

  const count = characters.length;
  
  if (count === 0) {
    return <p>There is no character</p>;
  }
  
  return <p>There is {count} characters</p>;
}

export default NumberOfCharacters;
