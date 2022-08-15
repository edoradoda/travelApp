import { getDataApi } from './getDataApi'
// Personal API Key for pixabay API
const apiKey = '29295583-ba16b99f62a1f905bf2375cc4';

const pixabayImage = (city,country) => {
  return new Promise(function(resolve,reject){
    try {
      getDataApi( `https://pixabay.com/api/?key=${apiKey}&q=${city}+${country}&image_type=photo`)
      .then(response => {
          resolve(response.hits[0])
      }) 
    } catch (error) {
      reject("error",error)
    }
  
  })
    
  
  };


export { pixabayImage }
