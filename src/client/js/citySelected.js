import { getDataApi } from './getDataApi'

const citySelected = (city) => {
    getDataApi( `http://api.openweathermap.org/geo/1.0/direct?q=${city.value}&limit=5&appid=${apiKey}`)
    .then(response => {
        if(response[0].lat != undefined && response[0].lat !=null){
          getDataApi( `http://api.geonames.org/findNearByWeatherJSON?lat=${response[0].lat}&lng=${response[0].lon}&username=edoradoda`)
          .then(result=>{
              if(result.weatherObservation != undefined){
                  localStorage.setItem('weather',JSON.stringify(result.weatherObservation))
              }
  
          })
        }
    }) 
  
  };


export { citySelected }
