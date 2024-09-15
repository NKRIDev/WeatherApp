//search bar
const searchBar = document.querySelector(".find-location button");

searchBar.addEventListener("click", async e =>{
    e.preventDefault();

    const valueCity = document.querySelector(".find-location input").value;

    if(valueCity == ""){
        alert("Please, put a city name");
        return;
    }

    //call my API (Weather API)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valueCity}&appid=5e9889ccdfe8d1f2d98aad805b64d7ad`)
    .then(responce => {
        if(!responce.ok){
            alert("City not found");
        }
        return responce.json();
    })
    .then(datas => {
        const temp = convertTemp(datas.main.temp);
        console.log(temp);
    })
    .catch(errer =>{
        console.error("Problème avec la météo: " + errer);
        alert("City not found");
    });
});

//convert kelvins to celcius because the api 
//returns the temperature in kelvin
function convertTemp(kelvin){
    const celsius = kelvin - 273.15
    return Math.round(celsius); //rounding to the unit
}
