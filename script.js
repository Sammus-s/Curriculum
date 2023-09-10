const copyEmail = async () => {
    try {        
        await navigator.clipboard.writeText(
            document.getElementById('email').textContent
        );      
        copySucess();
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

function copySucess(){
    const divEmail = document.getElementById("div-email");
    
    if (divEmail.childElementCount >= 2) {
        divEmail.removeChild(document.getElementById('copy-sucess-message'))
    }

    const Message = document.createElement('h3');
    Message.innerText = 'Copiado!';
    Message.id = 'copy-sucess-message';
    divEmail.appendChild(Message);  
}

function ajustarSectionHeigth() {
    const sections = document.querySelectorAll('.section');
    const HeaderHeigth = document.querySelector('.header').offsetHeight;

    sections.forEach(section => {
        section.style.height = `calc(100vh - (${HeaderHeigth}px + 3px))`;        
    });
}

window.addEventListener('load', ajustarSectionHeigth);
window.addEventListener('resize', ajustarSectionHeigth);