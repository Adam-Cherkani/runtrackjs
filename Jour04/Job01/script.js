document.getElementById('button').addEventListener('click', function() {
    fetch('expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => {
            const paragraph = document.createElement('p');
            paragraph.textContent = text;
            document.body.appendChild(paragraph);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});