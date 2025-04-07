fetch ('https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=54a69c0bb5bc0cae283d95f09ffdb3fd&units=metric')
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.main.temp);
    weather.textContent = data.main.temp+"\u00B0C, "+"Feels like "+data.main.feels_like+"\u00B0C, "+" - "+data.weather[0].description;

    const weathericon = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
    console.log(icon);

    icon.src = weathericon;
    icon.alt = data.weather[0].description;
});