const selectCountry = document.querySelector("#country");

const addCountries = (dataCountries) => {
    for (const dataCountry of dataCountries) {
        const option = document.createElement('option');
        option.value = dataCountry.name;
        option.setAttribute("data-value",dataCountry.iso2);
        selectCountry.appendChild(option);
    }
};



export { addCountries }
