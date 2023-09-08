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
    const box = document.getElementById("div-email");
    
    if (box.childElementCount >= 2) {
        box.removeChild(document.getElementById('copy-sucess-message'))
    }

    const button = document.createElement('h3');
    button.innerText = 'Copied! ';
    button.id = 'copy-sucess-message';
    box.appendChild(button);  
}