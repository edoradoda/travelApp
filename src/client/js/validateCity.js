const validateCity = () => {
    const city = document.getElementById("cityList");
    const divError = document.getElementById("msjErrorCity");
    const country = document.getElementById("countryList");
    if(country.value == ""){
        var newContent = document.createTextNode("Select the country first!");
        if(divError!=null){
            divError.innerHTML=''; 
            divError.appendChild(newContent); //añade texto al div creado.
            city.value = "";
        }
        if(city!=null){
            city.classList.add('error');
            city.classList.remove('ok');
        }
    }else{
        divError.innerHTML=''; 
        city.classList.add('ok');
        country.classList.add('ok');  //mañana
        city.classList.remove('error');
    }


    if(city==undefined || city=="") {
            return false;
    }
};

export { validateCity }
