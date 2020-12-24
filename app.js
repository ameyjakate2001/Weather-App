var input = document.querySelector('.inputValue');
var submit = document.querySelector('.button');
var heading = document.querySelector('.heading');
var changeTemp = document.querySelector('.change-temp');
var desc = document.querySelector('.description');
var hum = document.querySelector('.H');
var pres = document.querySelector('.P');
var iconChange = document.querySelector('.icon-visible');


submit.addEventListener('click',()=>{

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+' &appid=ce738eea78112880cff645761bae2e71').then(response =>{
    return response.json()
        }).then( response =>{
            if(input.value === ''){
                alert('please provide the Name');
            }
            else{
                var strings = response.weather[0].icon;
                var urls = "http://openweathermap.org/img/w/" +strings+ ".png>"
                iconChange.innerHTML = `<img class="fa-cloud" src=${urls}`;
                heading.innerHTML = response.name;
                 num = (response.main.temp - 273.15);
                var output = num < 0 ? Math.floor(Math.abs(num) * 100) * -1 / 100 : num.toFixed(2);
                changeTemp.innerHTML = output +' °C' ;
                desc.innerHTML = response.weather[0].description ; 
                hum.innerHTML = response.main.humidity + ' %';
                pres.innerHTML = response.main.pressure +' hPa';
                input.value ='';
            }
            
        })
        .catch(err=>{
            console.log('Empty City Name');
        })
})

