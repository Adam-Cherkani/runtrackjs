/////// Modal


const myModal = document.getElementById('butterflyModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})



////// reboot

document.getElementById('changeContentButton').addEventListener('click', citationBlade);

function citationBlade() {
    const citation = document.getElementById('btnChange');
    citation.innerHTML = `<p>J'ai vu tant de choses, que vous, humains, ne pourriez pas croire... De grands navires en feu surgissant de l'épaule d'Orion, j'ai vu des rayons fabuleux, des rayons C, briller dans l'ombre de la Porte de Tannhaüser. Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie. Il est temps de mourir.</p>`;
}
 

////// pagination change

document.addEventListener('DOMContentLoaded', (event) => {
    // Définition des contenus pour chaque page
    const pageContents = {
        '1': '<p class="lead">Contenu pour la page 1.</p>',
        '2': '<p class="lead">Contenu différent pour la page 2.</p>',
        '3': '<p class="lead">Voici le contenu de la page 3.</p>',
    };

    // Sélectionne tous les liens de pagination
    const paginationLinks = document.querySelectorAll('.pagination a');

    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Empêche le lien de suivre l'URL

            // Récupère le numéro de la page depuis le texte du lien
            const pageNum = this.text;

            // Met à jour le contenu du jumbotron selon le numéro de la page
            const contentDiv = document.getElementById('btnChange');
            contentDiv.innerHTML = pageContents[pageNum] || '<p class="lead">Contenu non trouvé.</p>';
        });
    });
});
    