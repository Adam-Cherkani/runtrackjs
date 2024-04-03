// This function will be called when the window is loaded to populate the type dropdown.
window.onload = function populateTypes() {
    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            let types = new Set();
            data.forEach(pokemon => {
                pokemon.type.forEach(type => types.add(type));
            });
            const typeInput = document.getElementById('typeInput');
            types.forEach(type => {
                let option = document.createElement('option');
                option.value = option.textContent = type;
                typeInput.appendChild(option);
            });
        });
};

function filterPokemon() {
    const id = document.getElementById('idInput').value;
    const name = document.getElementById('nameInput').value.toLowerCase();
    const type = document.getElementById('typeInput').value;

    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            let filtered = data.filter(pokemon => {
                return (!id || pokemon.id == id) &&
                       (!name || pokemon.name.french.toLowerCase().includes(name)) &&
                       (!type || pokemon.type.includes(type));
            });
            displayResults(filtered);
        });
}

function displayResults(pokemonArray) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
    pokemonArray.forEach(pokemon => {
        const para = document.createElement('p');
        para.textContent = `ID: ${pokemon.id}, Name: ${pokemon.name.french}, Types: ${pokemon.type.join(', ')}`;
        resultsDiv.appendChild(para);
    });
}
