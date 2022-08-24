import { addCities } from './js/addCities'
import { countrySelected } from './js/countrySelected'
import { citySelected } from './js/citySelected'
import { saveTrip } from './js/saveTrip'
import { btnAction } from './js/btnAction'
import { removeTrip } from './js/removeTrip'
import { handlerDate } from './js/handlerDate'
import { validateCity } from './js/validateCity'
import { initData } from './js/initData'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import  Favicon from './images/favicon.png';

const link = document.createElement('link');
link.href = Favicon;
link.rel = 'icon';
link.type = 'image/x-icon';

document.getElementsByTagName('head')[0].appendChild(link);
const content = document.querySelector(".content");
content.addEventListener("click",e=>{
    btnAction(e);
})

const selectCountry = document.querySelector("#country");
const selectCity = document.querySelector("#city");
selectCountry.addEventListener("onchange", countrySelected);
selectCity.addEventListener("onchange", citySelected);

const scrollTo = id =>{
    location.href = "#";
    location.href = `#${id}`;
}

initData();
  
export {
    countrySelected,
    addCities,
    citySelected,
    saveTrip,
    removeTrip,
    validateCity,
    handlerDate,
    scrollTo,
}