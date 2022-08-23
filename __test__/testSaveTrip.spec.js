// Import the js file to test
// import { showResult } from "../src/client/js/showResult"
import { saveTrip } from "../src/client/js/saveTrip"

test('Check showResult ', () => {
    document.body.innerHTML = `
    <div>
    <input list="city" id="cityList"  name="city" value="Popayan" />
    <input list="country" id="countryList" name="country" value="Colombia" />
    <input type="date" id="departing" name="departing" value="2022-08-20"  >   
    <main class="content"> </main>

    <template id="template-card">
    <div class="nestedGrid">
        <div class="imgCity">
            <img id="img1" src='' alt="Avatar" class="photoBox">
        </div>
        <div class="dataTrip">
            <h4 class="subTitle">My trip to: Paris,France</h4> 
            <h4 class="subTitle">Departing: 02/12/2222</h4> 
            <div class="flightInfo">
                <span class="strongText">
                    <!-- Flight info :  -->
                </span>
                <!-- <p> ... <br> </p> -->
            </div>
            <div class="buttons">
                <input type="button" class="greenButton"  value="Save Trip">
                <input type="button" class="greenButton"  value="Remove Trip">
            </div>
        </div>
        <div class="options">
            <a class="optionsButton" href="#">
                <div class="plus icon"></div>
                    <span class="iconSpan">add lodging info</span> 
            </a>
            <a class="optionsButton" href="#">
                <div class="plus icon"></div>
                    <span class="iconSpan">add packing list</span> 
            </a>
        </div>
        <div class="weather">
            <span>Paris, France is 220 days away</span>
            <br><br>
            <span>Tipical weather for then is:</span>
            <br>
            <span class="smallText">High - 46 , low - 23 </span>
            <br>
            <span class="smallText">Mostly cloudy throughout the day</span>
        </div>
    </div>

</template>

</div>

  `;
  let countries = []
  countries.push({
    flag: "",
    iso2: "CO",
    iso3: "COL",
    name: "Colombia"
  })

  countries.push({
    flag: "",
    iso2: "CO",
    iso3: "COL",
    name: "Otro"
  })

  let  trips = []
  localStorage.setItem('countries',JSON.stringify(countries))
  saveTrip(true)
  trips = JSON.parse(localStorage.getItem('trips'))
  expect(trips.length).toEqual(1);

});



// // Import the js file to test
// import { showResult } from "../src/client/js/showResult"

// let input = { agreement: "AGREEMENT"} 

// test('Check showResult ', () => {
//     document.body.innerHTML = `
//     <div  id="results" />
//   `;

//   showResult(input)

//   const divResults = document.getElementById('results');


//   expect(divResults.innerHTML.length).toBeGreaterThan(10);

// });