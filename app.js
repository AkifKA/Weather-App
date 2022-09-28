const url = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "f7495dc5c8088b1929ffff7b578e7c2b";

const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResult(searchBar.value);
  }
};

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=tr`;
  fetch(query).then((weather) => {
    return weather.json();
  });
};

const displayResult = (result) => {
  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;
};

const searchBar = document.querySelector(".search-bar");
searchBar.addEventListener("keypress", setQuery);
