/**
 * Component to render the details of a character
 * @param {*} character - Character object 
 */
function CharacterDetail({ character = {} }) {
    return !character.name ? (
        // if character name is not provided, then display "No character"
        <div>No character</div>
    ) : (
        // else display the character details
        <div>
            <h2>{character.name}</h2>

            {/* render ID and Name labels so tests (and UX) have clear labels */}
            <p>
                <strong>ID:</strong> {character.id}
            </p>
            <p>
                <strong>Nom:</strong> {character.name}
            </p>

            {character.thumbnail && (
                <img
                    // use the raw thumbnail path + extension (tests expect this format)
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={character.name}
                />
            )}

            <p>{character.description}</p>
            <p>{character.modified}</p>
        </div>
    );
}

export default CharacterDetail;