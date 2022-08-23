import { forecastWeather } from './forecastWeather'
import { pixabayImage } from './pixabayImage'

import { currentWeather } from './currentWeather'
import  GlobeTrotter  from '../images/globeTrotter.jpg';


  const   showTrips =  async  () => {
    const content = document.querySelector(".content");
    let  trips = JSON.parse(localStorage.getItem('trips'))
    const countTrips = trips.length;
    let fragment = document.createDocumentFragment(); // DOM nodes can be added to build an offscreen DOM tree.
    const template = document.querySelector("#template-card").content; 
    content.innerHTML = '';
    var now = new Date().getTime();
    let index = 0;
    let  p1 = new Promise(  async function(resolve,reject){
      for (let item of trips) {
        let daysAway =  new Date(item.departing).getTime() - now;
          // Time calculations for days, hours, minutes and seconds
        daysAway = (Math.floor(daysAway / (1000 * 60 * 60 * 24))) + 1;
        template.querySelectorAll(".nestedGrid .dataTrip .subTitle")[0].textContent = `My trip to : ${item.city}, ${item.country} `;
        template.querySelectorAll(".nestedGrid .dataTrip .subTitle")[1].textContent = `Departing : ${item.departing}`;
        template.querySelectorAll(".nestedGrid .dataTrip .subTitle")[1].textContent = `Departing : ${item.departing}`;
        let msjDaysAway=`${item.city}, ${item.country}  is ${daysAway} days away`; 
        if(daysAway < 0){
            msjDaysAway = `${item.city}, ${item.country}  is EXPIRED by ${daysAway} days  `; 
            template.querySelectorAll(".nestedGrid .weather span")[0].classList.add("expired");
        }else{
            template.querySelectorAll(".nestedGrid .weather span")[0].classList.remove("expired");
        }

        template.querySelectorAll(".nestedGrid .weather span")[0].textContent = msjDaysAway;

        let responsePixabay =  await pixabayImage(item.city,item.country)
        let webformatURL = '';
        if(responsePixabay != undefined){
          webformatURL = responsePixabay.webformatURL
        }

        if(webformatURL == ''){
          template.getElementById("img1").setAttribute("src",GlobeTrotter)
        }else {
          template.getElementById("img1").setAttribute("src",webformatURL)
        }
       
        template.querySelectorAll(".nestedGrid .dataTrip .buttons .greenButton")[1].dataset.id = index;
        if(daysAway == 0){
          let response =  await currentWeather(item.city)
          template.querySelectorAll(".nestedGrid .weather span")[1].textContent = `Current weather for then is:`;
          if(response != undefined){
            template.querySelectorAll(".nestedGrid .weather span")[2].textContent = `Temperature : ${response.temperature} Celsius, Clouds: ${response.clouds} `;
            template.querySelectorAll(".nestedGrid .weather span")[3].textContent = `Weather Condition: ${response.weatherCondition}`;
          }else{
            template.querySelectorAll(".nestedGrid .weather span")[2].textContent = `...`;
            template.querySelectorAll(".nestedGrid .weather span")[3].textContent = `...`;
          }

        }else {
          try {
            let response =  await forecastWeather(item.city,item.iso2Country,item.departing)
            template.querySelectorAll(".nestedGrid .weather span")[1].textContent = `Tipical weather for then is:`;
            if(response != undefined){
              template.querySelectorAll(".nestedGrid .weather span")[2].textContent = `Temperature : High - ${response.high_temp} , low - ${response.low_temp} (Celsius)`;
              template.querySelectorAll(".nestedGrid .weather span")[3].textContent = `Weather Condition: ${response.weather.description}`;
            }else{
              template.querySelectorAll(".nestedGrid .weather span")[2].textContent = `...`;
              template.querySelectorAll(".nestedGrid .weather span")[3].textContent = `...`;
            }
          } catch (error) {
            template.querySelectorAll(".nestedGrid .weather span")[2].textContent = `...`;
            template.querySelectorAll(".nestedGrid .weather span")[3].textContent = `...`;
          }
       

        }
       
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
          if(index === (countTrips -1)){
            resolve("ok");
          }
          index++;
      };

    })

    p1.then(() => {
      content.appendChild(fragment);
    })

};



export { showTrips }
