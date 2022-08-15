import { showTrips } from './showTrips'
import { addCountries } from './addCountries'

//load data
let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

const dataCities = JSON.parse(localStorage.getItem('cities'))
const dataCountries = JSON.parse(localStorage.getItem('countries'))
let  trips = JSON.parse(localStorage.getItem('trips'))

const initData = () => {
    if(dataCities == null){
        fetch("https://countriesnow.space/api/v0.1/countries", requestOptions)
        .then(response => response.json())
        .then(result => {
            localStorage.setItem('cities',JSON.stringify(result.data))
        })
        .catch(error => console.log('error', error));
      }
    
      if(dataCountries == null){
        fetch("https://countriesnow.space/api/v0.1/countries/flag/images", requestOptions)
        .then(response => response.json())
        .then(result => {
            localStorage.setItem('countries',JSON.stringify(result.data))
            const data = JSON.parse(localStorage.getItem('countries'))
            addCountries(data)
        })
        .catch(error => console.log('error', error));
      }else {
        addCountries(dataCountries)
      }
    
    
      if(trips != undefined && trips.length >0){
        showTrips();
      }
    
}


export { initData }
