const handlerDate = (event) => {
    const date = document.getElementById("departing");

    if(date.value != ""){
        date.classList.add('ok'); 
        date.classList.remove('error');
    }
};



export { handlerDate }
