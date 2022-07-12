function showResult(rsDatas) {
    console.log("::: Running showResult :::", rsDatas);
    let divResult=document.getElementById("results");
    divResult.innerHTML="";
    for (const rsData in rsDatas) {
        const tag = document.createElement("li");
        tag.innerHTML = `<span class="toggle"> ${rsData}: ${rsDatas[rsData]} </span>`;
        divResult.appendChild(tag);
    }

    const str = JSON.stringify(rsDatas, null, 5); // spacing level = 2
    const pElement = document.createElement("p");
    const text = document.createTextNode(str);
    pElement.appendChild(text);
    divResult.appendChild(pElement)
    console.log("divResult",divResult)
  
}


export { showResult }
