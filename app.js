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
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=5e9889ccdfe8d1f2d98aad805b64d7ad")
    .then(responce => {
        if(!responce.ok){
            //TODO : city is not found
            alert("City not found");
        }
        return responce.json();
    })
    .then(datas => {
        console.log(datas.main.temp);
    })
    .catch(errer =>{
        console.error("Problème avec la météo: " + errer);
        alert("City not found");
    });
});

