import { showMsj } from './showMsj'
import { showTrips } from './showTrips'

const saveTrip = async (test = false) => {
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
  let  countries = JSON.parse(localStorage.getItem('countries'))
  let iso2 = (countries.filter(value=>value.name == country.value))[0].iso2
  if(msj == ''){
      let  trips = JSON.parse(localStorage.getItem('trips'))
      if(trips == null){
          trips =[]
      }

      const trip= {
              country : country.value,
              iso2Country : iso2,
              city : city.value,
              departing: date.value,
              flightInfo : "",
          }

      trips.push(trip);
      localStorage.setItem('trips',JSON.stringify(trips))
      msj ="Successfully saved trip! ";
      country.value = '';
      city.value = '';
      date.value = '';
      if(!test){
        showTrips()
        showMsj(msj)
      }
     
  }
};


export { saveTrip }
