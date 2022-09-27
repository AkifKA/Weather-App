const getWeather = async function () {
  const API_KEY = "55e3f1fdc1c94581b6b11537c9b8f8bf";
  const url =
    "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=" +
    API_KEY;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      isError = true;
      // throw new Error(`Something went wrong: ${res.status} `);
    }
    const data = await res.json();
    // console.log(data.articles);
    renderNews(data.articles);
  } catch (error) {
    console.log(error);
  }
};

const searchBtn = document.querySelector(".btn");
searchBar.addEventListener("click", (e) => {
   getResult();
});

const getResult=(cityName=>{
    console.log(cityName);
})
const searchBarDiv=document.querySelector(.search-bar)