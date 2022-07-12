async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let language = document.getElementById('lang').value
    console.log("dataSend",formText,language)
    if(Client.checkForText(formText)){
      let rsData = await postData('/meaning', {txt:formText, lang:language} );
      Client.showResult(rsData)
    }
    // getTexturl('url')
}

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
    url='https://sentiment-analysis-100.herokuapp.com/meaning'
    // console.log("data",data, JSON.stringify(data))
    const response = await fetch(url, {
    method: 'POST', 
    // credentials: 'same-origin',
    credentials: 'omit',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
        
   // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });
    try {
      const newData = await response.json();
      console.log("POst Data",newData);
      return newData;
    } catch(error) {
      console.log("error",error)
    }
}

export { handleSubmit }
