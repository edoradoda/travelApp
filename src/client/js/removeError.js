function removeError() {
            const divError = document.getElementById("msjError");
            const inputText = document.getElementById("name");
            divError.innerHTML=''; //añade texto al div creado.
            // ✅ Add classes to element
            inputText.classList.add('ok');
            inputText.classList.remove('error');
}


export { removeError }
