
const apiKey="e1e07f1ebccbe052bfc8e3ea5c2a790e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput=document.getElementById("input-city");
const searchButton=document.getElementById("button");
const weatherIcon=document.querySelector(".weather-icon");

searchButton.addEventListener("click",()=>{checkWeather(searchInput.value);})

async function checkWeather(cityName){
    const response=await fetch(apiUrl+cityName+`&appid=${apiKey}`);
    var data=await response.json();

    if(response.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
     
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".city").innerHTML=data.name;
    
    
        //get weather-icon
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
    
   
}

