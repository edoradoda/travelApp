import { addCities } from './addCities'

const countrySelected = (country) => {
  const dataCities = JSON.parse(localStorage.getItem('cities'))
  if(dataCities != undefined && dataCities != null){
    const cities = (dataCities.filter(value =>value.country == country.value ))[0].cities
    addCities(cities)
  }
};


export { countrySelected }
