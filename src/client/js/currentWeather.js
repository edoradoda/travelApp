import { getDataApi } from './getDataApi'

// Personal API Key for OpenWeatherMap API
const apiKey = '50b167ff30e937171afa4f012fd8323e&units=imperial';//units=metric Celsius

const currentWeather = (city) => {
    return new Promise(function(resolve,reject){
      getDataApi( `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
      .then(response => {
          if(response[0].lat != undefined && response[0].lat !=null){
            getDataApi( `http://api.geonames.org/findNearByWeatherJSON?lat=${response[0].lat}&lng=${response[0].lon}&username=edoradoda`)
            .then(result=>{
                if(result.weatherObservation != undefined){
                    // localStorage.setItem('weather',JSON.stringify(result.weatherObservation))
                    resolve(result.weatherObservation)
                }else{
                  reject("error")
                }
    
            })
          }
      }) 
    });
  };


export { currentWeather }
