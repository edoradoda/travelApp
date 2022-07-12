function checkForText(inputText) {
    console.log("::: Running checkFortext :::", inputText);
    if(inputText==undefined || inputText=="") {
            // alert("Enter text!")
            const divError = document.getElementById("msjError");
            const inputText = document.getElementById("name");
            var newContent = document.createTextNode("ERROR: Enter text!");
            if(divError!=null){
                divError.appendChild(newContent); //añade texto al div creado.
            }
            if(inputText!=null){
                inputText.classList.add('error');
                inputText.classList.remove('ok');
            }
          
        return false;
    }

    return true
}


export { checkForText }
