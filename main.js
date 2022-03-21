const api = {
    key: "7e3f21edee540e6110af347b55eb1ab2",
    base: "https://api.openweathermap.org/data/2.5/",
  };


let viewResults = (weather) => {
   
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
  
    let dateElement = document.querySelector('.location .date');
    let date = new Date();
    dateElement.innerText = buildAndGetDate(date);
  
  
    let temprature = document.querySelector('.current .temp');
    temprature.innerHTML = `${Math.round(weather.main.temp)} <span>°c</span>`;
  
    let weatherElement = document.querySelector('.current .weather');
    weatherElement.innerText = weather.weather[0].main;
  
    let hiLow = document.querySelector('.current .hi-low');
    hiLow.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  
};

let buildAndGetDate = (date) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[date.getDay()];
    let currentDate = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    return `${day} ${currentDate} ${month} ${year}`;
} 

const getWeatherInfo = (query) => {
    console.log(query);
    let url = `${api.base}weather?q=${query}&units=metric&appid=${api.key}`;
    const response =  fetch(url)
     .then((response) =>{ return response.json();})
     .then((weatherOutput) => {
        console.log(weatherOutput);
        viewResults(weatherOutput);
    });    
    

  };

let setQuery = (event) => {
    if (event.keyCode === 13) {
        getWeatherInfo(searchBox.value);
    }
};

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);