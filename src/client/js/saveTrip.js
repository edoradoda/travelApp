import { showMsj } from './js/showMsj'
import { showTrips } from './js/showTrips'

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
      let  trips = JSON.parse(localStorage.getItem('trips'))
      if(trips == null){
          trips =[]
      }
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
      showTrips();
      showMsj(msj)
  }
};


export { saveTrip }
