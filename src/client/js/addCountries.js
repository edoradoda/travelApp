const selectCountry = document.querySelector("#country");

/**
 * @description : Funtion for load data list country
 * @param {array list} dataCountries 
 */
const addCountries = (dataCountries) => {
    for (const dataCountry of dataCountries) {
        const option = document.createElement('option');
        option.value = dataCountry.name;
        option.setAttribute("data-value",dataCountry.iso2);
        selectCountry.appendChild(option);
    }
};



export { addCountries }
