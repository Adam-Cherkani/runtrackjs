const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY; 
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight; 
    const scrollPercentage = (scrolled / maxHeight) * 100; 
    
   
    footer.style.backgroundColor = `hsl(${scrollPercentage}, 100%, 50%)`;
});