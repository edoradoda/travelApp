import { showTrips } from './showTrips'
import { removeTrip } from './removeTrip'

const btnAction = e => {
    let  trips = JSON.parse(localStorage.getItem('trips'))
    if(e.target.value == "Remove Trip"){
        removeTrip(trips[e.target.dataset.id].city,trips[e.target.dataset.id].country)
    }else if(e.target.value == "Save Trip"){
        scrollTo("saveTrip")
    }
    // showTrips()
    e.stopPropagation()
}


export { btnAction }
