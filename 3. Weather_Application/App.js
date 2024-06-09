const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d7a33f6a8fmshbc99a8cf6a88d60p1e0bffjsnd58d61ea00b2",
      "X-RapidAPI-Host": "weather-api99.p.rapidapi.com",
    },
  };
  
  fetch("https://weather-api99.p.rapidapi.com/weather?city=Nagpur", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      document.getElementById('base').innerText = response.base;
      document.getElementById('clouds').innerText = response.clouds.all;
      document.getElementById('cod').innerText = response.cod;
      document.getElementById('lat').innerText = response.coord.lat;
      document.getElementById('lon').innerText = response.coord.lon;
      document.getElementById('feels_like').innerText = response.main.feels_like;
      document.getElementById('pressure').innerText = response.main.pressure;
      document.getElementById('temp').innerText = response.main.temp;
      document.getElementById('humidity').innerText = response.main.humidity;
      document.getElementById('min_temp').innerText = response.main.temp_min;
      document.getElementById('max_temp').innerText = response.main.temp_max;
      document.getElementById('sunrise').innerText = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
      document.getElementById('sunset').innerText = new Date(response.sys.sunset * 1000).toLocaleTimeString();
      
      document.getElementById('wind_degrees').innerText = response.wind.deg;
      document.getElementById('wind_speed').innerText = response.wind.speed;
    })
    .catch((err) => console.error(err));
  