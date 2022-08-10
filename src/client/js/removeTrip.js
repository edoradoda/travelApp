import { showMsj } from './showMsj'

const removeTrip = (city,country) => {
    let  trips = JSON.parse(localStorage.getItem('trips'))
    trips = trips.filter(trip => trip.city != city && trip.country != country);
    localStorage.setItem('trips',JSON.stringify(trips))
    const msj = `Trip to ${city},${country} remove successfully! `;
    showMsj(msj);
};

export { removeTrip }
