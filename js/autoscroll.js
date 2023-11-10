const smoothScrollLinks = document.querySelectorAll('.smoothScroll');
 

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', smoothScrollToTarget);
});


function smoothScrollToTarget(event) {
    event.preventDefault(); 
    const targetId = this.getAttribute('href'); 
    const targetElement = document.querySelector(targetId); 

    
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
}