const addCities = (dataCities) => {
    const selectCity = document.querySelector("#city");
    selectCity.innerHTML='';
    for (const dataCity of dataCities) {
        const option = document.createElement('option');
        option.value = dataCity;
        selectCity.appendChild(option);
    }
 
};



export { addCities }
