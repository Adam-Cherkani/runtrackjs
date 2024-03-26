const textarea = document.getElementById('keylogger');

function enregistrerTouche(event) {
   
    const lettre = event.key;
    const estLettre = lettre.match(/[a-z]/i);
    
    
    if (estLettre && document.activeElement === textarea) {
        
        textarea.value += lettre.repeat(2);
    } else if (estLettre) {
        
        textarea.value += lettre;
    }
}


document.addEventListener('keypress', enregistrerTouche);