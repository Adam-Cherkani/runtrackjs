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

document.getElementById('page1').addEventListener('click', page1Content);

function page1Content () {
    const contenu = document.getElementById('jumbotronContent');
    contenu.innerHTML = `
    <div class="jumbotron col-8 bg-body-secondary m-2">
    <div id ="jumbotronContent">
    <h2 class="display-4">Bonjour, Monde !</h2>
    <div id="btnChange">
    <p class="lead ">Il existe plusieurs version du terme:</p>
    <p class="lead ">Le monde est la matière, l'espace et les phénomènes qui nous sont accesibles par les sens, l'expérience ou la raison.</p>
    <p class="lead">Le sens le plus courant désigne notre planète, la Terre, avec ses habitants, et son environnement plus ou moins naturel.</p>
  </div>
    <hr class="my-4">
    <p>Le sens étendu désigne l'univers dans son ensemble.</p>
    <button type="button" class="btn btn-danger btn-lg" id="changeContentButton" href="#" role="button">Rebootez le monde</button>
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>

    `
}

document.getElementById('page2').addEventListener('click', page2Content);

function page2Content () {
    const contenu = document.getElementById('jumbotronContent');
    contenu.innerHTML = `
    <div class = 'd-flex flex-column justify-content-center align-items-center'>
    <h3>Nous vendons aussi des criquets, mais eux sont comestibles !</h3>
    <img src="criquet.jpg" style="width: 40rem; height: 25rem; border: 2px solid blue;">
    </div>
    `
}

////// rendre actif élement 

document.querySelectorAll('.list-group-item').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelectorAll('.list-group-item').forEach(function(i) {
            i.classList.remove('active');
        });
        item.classList.add('active');
    });
});

///// progress bar




    