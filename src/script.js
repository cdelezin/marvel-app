// Fonction pour récupérer les personnages depuis l'API locale
async function getCharacters() {
	try {
	const response = await fetch('./../data/characters.json');
		if (!response.ok) {
			throw new Error('Erreur lors de la récupération des personnages');
		}
		const data = await response.json();
        
	// console.log('Personnages Marvel:', data); // Suppression du log ici pour éviter le doublon
		return data;
	} catch (error) {
		console.error('Erreur:', error);
		return null;
	}
}

// Appel de la fonction pour afficher les personnages dans la console
getCharacters().then(data => {
	const ul = document.getElementById('characters');
	if (ul && Array.isArray(data)) {
		ul.innerHTML = '';
		data.forEach(character => {
			const li = document.createElement('li');
			li.textContent = character.nom;
			ul.appendChild(li);
		});
	}
});
