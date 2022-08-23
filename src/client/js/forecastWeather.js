import { getDataApi } from './getDataApi'

// Personal API Key for OpenWeatherMap API
const apiKey = '96fbd2cbb86b4bf7b93373c192290955';//units=metric Celsius


const forecastWeather = (city,countryIso,date) => {
  return new Promise(function(resolve,reject){
      getDataApi( `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${countryIso}&key=${apiKey}`)
      .then(response => {
          let forecast = (response.data.filter(value => value.datetime == date))[0];
          resolve(forecast)
      }) 
      .catch (error => {
        reject(error)
      })
  })
    
  
  };


export { forecastWeather }
