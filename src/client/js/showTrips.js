const content = document.querySelector(".content");

  const showTrips = () => {
    let  trips = JSON.parse(localStorage.getItem('trips'))
    let fragment = document.createDocumentFragment();
    const template = document.querySelector("#template-card").content;
    content.innerHTML = '';
    var now = new Date().getTime();

    trips.forEach((item,index) => {
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
        // template.querySelectorAll("img").setAttribute("src",producto.imgUrl)
        template.querySelectorAll(".nestedGrid .dataTrip .buttons .greenButton")[1].dataset.id = index;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });

    content.appendChild(fragment);
};



export { showTrips }
