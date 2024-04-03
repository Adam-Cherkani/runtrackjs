function updateUsers() {
    fetch('utilisateur.json')
    .then (response => response.json())
    .then (data => {
        
        const tableBody = document.getElementById('userTable');
        tableBody.innerHTML = '';

        data.forEach(user => {
            const row = `<tr>
                            <td>${user.id}</td>
                            <td>${user.nom}</td>
                            <td>${user.prenom}</td>
                            <td>${user.email}</td>
                         </tr>`;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => {
        console.error('Erreur lors du chargement des utilisateurs:', error);
    });
}
updateUsers();
