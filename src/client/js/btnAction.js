import { removeTrip } from './removeTrip'

/**
 * @description : detects a click on the items container div specifically on the save and delete trips buttons
 * @param {event} e 
 */
const btnAction = e => {
    let  trips = JSON.parse(localStorage.getItem('trips'))
    if(e.target.value == "Remove Trip"){
        removeTrip(trips[e.target.dataset.id].city,trips[e.target.dataset.id].country)
    }else if(e.target.value == "Save Trip"){
        scrollTo("saveTrip")
    }
    e.stopPropagation()
}


export { btnAction }
