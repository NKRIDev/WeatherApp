//search bar
const searchBar = document.querySelector(".find-location button");

searchBar.addEventListener("click", e =>{
    e.preventDefault();

    const valueCity = document.querySelector(".find-location input").value;

    if(valueCity == ""){
        alert("Please, put a city name");
        return;
    }

    
    console.log(valueCity);
});

