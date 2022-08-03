import { checkForText } from './js/textChecker'
import { handleSubmit } from './js/formHandler'
import { showResult } from './js/showResult'
import { removeError } from './js/removeError'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import  Logo from './images/paris.jpg';
import  Favicon from './images/favicon.png';

// const element= document.getElementById("img1");
// element.src=Logo;
    // <link rel="icon" type="image/x-icon" href=""> 

const link = document.createElement('link');
link.href = Favicon;
link.rel = 'icon';
link.type = 'image/x-icon';
document.getElementsByTagName('head')[0].appendChild(link);



const selectCountry = document.querySelector("#country");
const selectCity = document.querySelector("#city");

const countrySelected = (country) => {
  const dataCities = JSON.parse(localStorage.getItem('cities'))
  const cities = (dataCities.filter(value =>value.country == country.value ))[0].cities
  addCities(cities)
};

const addCities = (dataCities) => {
    selectCity.innerHTML='';
    for (const dataCity of dataCities) {
        const option = document.createElement('option');
        option.value = dataCity;
        selectCity.appendChild(option);
    }
 
};

// Personal API Key for OpenWeatherMap API
const apiKey = '50b167ff30e937171afa4f012fd8323e&units=imperial';//units=metric Celsius


/* Function to GET Web API Data*/
const getGeocoding = async (url)=>{
    const res = await fetch(url);
    try {
      const data=res.json();
      return data;
    } catch (error) {
      console.log("error=",error)
      return error;
    }
  }


const citySelected = (city) => {
    console.log("city selected",city.value);
    getGeocoding( `http://api.openweathermap.org/geo/1.0/direct?q=${city.value}&limit=5&appid=${apiKey}`)
    .then(response => {
        console.log("response",response)
        getGeocoding( `http://api.geonames.org/findNearByWeatherJSON?lat=${response[0].lat}&lng=${response[0].lon}&username=edoradoda`)
        .then(result=>{
            console.log("result",result)
            if(result.weatherObservation != undefined){
                localStorage.setItem('weather',JSON.stringify(result.weatherObservation))
            }

        })
    }) 
  
  };

  const showTrips = (trips) => {
    const content = document.querySelector(".content");
    let fragment = document.createDocumentFragment();
    const template = document.querySelector("#template-card").content;
    trips.forEach((item) => {
        console.log("item",item)
        template.querySelectorAll(".nestedGrid .dataTrip .subTitle")[0].textContent = `My trip to : ${item.city}, ${item.country} `;
        template.querySelectorAll(".nestedGrid .dataTrip .subTitle")[1].textContent = `Departing : ${item.departing}`;
        console.log("log",template.querySelectorAll(".nestedGrid .dataTrip .subTitle"));
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });

    content.appendChild(fragment);
};

const saveTrip = () => {
    const country = document.getElementById('countryList');
    const city = document.getElementById('cityList');
    const date = document.getElementById('departing');
    let msj = '';
    if(date.value == ''){
        date.classList.add('error');
        msj='Enter departing date!';
    }
    if(city.value == ''){
        city.classList.add('error');
        msj='Select city!';
    }
    if(country.value == ''){
        country.classList.add('error');
        msj='Select country!';
    }

    if(msj == ''){
        let trips = []
        const trip= {
                country:country.value,
                city:city.value,
                departing:date.value,
                flightInfo:"",
                weather:{temperature:"",description:""}
            }

        trips.push(trip);
        localStorage.setItem('trips',JSON.stringify(trips))
        msj ="Successfully saved trip! ";
        showTrips(trips);


    }

    const msjError = document.getElementById('msjResult');
    var newContent = document.createTextNode(msj);
    msjError.innerHTML=''; 
    msjError.appendChild(newContent); //añade texto al div creado.
    console.log("datois",country.value,city.value,date.value)
};

const removeTrip = (event) => {
 
    // localStorage.setItem('date',JSON.stringify(date.value))
};
const handlerDate = (event) => {
    // console.log("date selected",event.target.value)
    const date = document.getElementById("departing");

    if(date.value != ""){
        date.classList.add('ok');  // Eduar  Dorado
        date.classList.remove('error');
    }
};



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




  selectCountry.addEventListener("onchange", countrySelected);
  selectCity.addEventListener("onchange", citySelected);

const addCountries = (dataCountries) => {
    for (const dataCountry of dataCountries) {
        const option = document.createElement('option');
        option.value = dataCountry.name;
        selectCountry.appendChild(option);
    }
};


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const dataCities = JSON.parse(localStorage.getItem('cities'))
  const dataCountries = JSON.parse(localStorage.getItem('countries'))
//   console.log("dataCities",dataCities)
//   console.log("dataCountries",dataCountries)

  if(dataCities == null){
    fetch("https://countriesnow.space/api/v0.1/countries", requestOptions)
    .then(response => response.json())
    .then(result => {
        localStorage.setItem('cities',JSON.stringify(result.data))
        const data = JSON.parse(localStorage.getItem('cities'))
        console.log("dataCities",data)

    })
    .catch(error => console.log('error', error));
  }

  if(dataCountries == null){
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images", requestOptions)
    .then(response => response.json())
    .then(result => {
        localStorage.setItem('countries',JSON.stringify(result.data))
        const data = JSON.parse(localStorage.getItem('countries'))
        // console.log("dataCountries",dataCountries)

    })
    .catch(error => console.log('error', error));
  }else {
    console.log("adding countries")
    addCountries(dataCountries)

  }



 

  

export {
    handleSubmit,
    checkForText,
    showResult,
    removeError,
    countrySelected,
    citySelected,
    saveTrip,
    removeTrip,
    validateCity,
    handlerDate,

}

// alert("I EXIST");