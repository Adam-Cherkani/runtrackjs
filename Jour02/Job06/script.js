const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let enteredCode = [];

document.addEventListener('keydown', (e) => {
    enteredCode.push(e.key);
    enteredCode = enteredCode.slice(-konamiCode.length);

    if (enteredCode.join('').toLowerCase() === konamiCode.join('').toLowerCase()) {
        document.body.classList.add('konami-activated');
        document.getElementById('content').style.display = ''; 
    }
});