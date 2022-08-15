const handlerDate = (event) => {
    // console.log("date selected",event.target.value)
    const date = document.getElementById("departing");

    if(date.value != ""){
        date.classList.add('ok'); 
        date.classList.remove('error');
    }
};



export { handlerDate }
