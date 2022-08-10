const showMsj = (msj) => {
    const msjError = document.getElementById('msjResult');
    let newContent = document.createTextNode(msj);
    msjError.innerHTML=''; 
    msjError.appendChild(newContent); //añade texto al div creado.
};


export {showMsj}
