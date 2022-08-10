/* Function to GET Web API Data*/
const getDataApi = async (url)=>{
    const res = await fetch(url);
    try {
      const data=res.json();
      return data;
    } catch (error) {
      console.log("error=",error)
      return error;
    }
  }


export { getDataApi }
