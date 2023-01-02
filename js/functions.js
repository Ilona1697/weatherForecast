"use strict";


function loadPage() {
    const location = sessionStorage.getItem('inputValue') || 'Rivne';
    const cities = ['Kyiv', 'Lviv', 'Odessa', 'Kharkiv'];

    const response = getData(location);
    console.log(response);
    if (response.cod !== '200') {
        sessionStorage.setItem('inputValue', sessionStorage.getItem('searchCity'));
        showSnackbar(response.message);
    } else {
        sessionStorage.setItem('searchCity', sessionStorage.getItem('inputValue'));
        drawTodayPage(response);
    }

    function drawTodayPage(data) {
        const currentYear = new Date().getFullYear();
        const currentMonth = formateDate(new Date().getMonth() + 1);
        const currentDay = formateDate(new Date().getDate());
        const todayHourlyData = data.list.filter(elem => {
            if (elem.dt_txt.startsWith(`${currentYear}-${currentMonth}-${currentDay}`)) {
                return true;
            }
        });

        drawCurrentWeather(data);
        drawHourlyWeatherSlider(todayHourlyData);
        drawOtherCity(cities);
    }
    function drawCurrentWeather(data) {
        let todayDate = createCurrentDate();
        $('#todayDate').html(todayDate);

        /* show selected city */
        $('#cityName').html(data.city.name);

        /* show current temp in selected city */
        let currentTemp = formateTemp(data.list[0].main.temp);
        $('#currentTemp').html(currentTemp);

        /* show weather name */
        $('#weatherName').html(data.list[0].weather[0].description);

        /* show real Temp */
        let realTemp = formateTemp(data.list[0].main["feels_like"]);
        $('#realTemp').html(realTemp);

        /* show weather icon */
        let iconUrl = getImgUrl(data.list[0].weather[0].icon);
        $('#icon').attr('src', iconUrl);

        /* show sunrise time */
        let population = data.city.population;
        $('#population').html(population);

        /* show clouds, % */
        let clouds = data.list[0].clouds.all;
        $('#clouds').html(clouds + '%');

        /* show humidity */
        let humidity = data.list[0].main.humidity;
        $('#humidity').html(humidity + '%');

    }
    function drawHourlyWeatherSlider(data) {
        if (data) {
            $('#itc-slider__items').html('');
            data.map((elem, index) => {
                if (index > 5) {
                    console.log(index);
                    return;
                } else {
                    const temp = formateTemp(elem.main.temp);
                    const feelTemp = formateTemp(elem.main["feels_like"]);
                    const iconUrl = getImgUrl(elem.weather[0].icon);
                    const windDirection = getWindDirection(elem.wind.deg);
                    const description = elem.weather[0].description;
                    $('#itc-slider__items').append(`<div class="col itc-slider__item">
                        <div class="row hourNum">${'time'}</div>
                        <div class="row icon"><img src="${iconUrl}" alt="" /></div>
                        <div class="row description">${description}</div>
                        <div class="row temp">${temp}</div>
                        <div class="row feelTemp">${feelTemp}</div>
                        <div class="row wind">${windDirection}</div>
                    </div>`);
                }
            });

        }
    }
    function drawOtherCity(cities) {
        console.log(data, 'uuuuu');
        cities.map(city => {
            const data = getData(city);
            console.log(data, 'uuuuu');
            // const city = data.city.name;
            // const imgUrl = getImgUrl(data.list[0].weather.icon);
            // const temp = formateTemp(data.list[0].main.temp);

            // $('#otherCitiesBlock').append(`<div class="place">
            //     <div class="city">${city}</div>
            //     <div class="img"><img src="${imgUrl}" alt="" /></div>
            //     <div class="temp">${temp}</div>
            // </div>`);
        });
    }

    $('#searchForm').submit((e) => {
        e.preventDefault();
        const searchCity = $('#searchCity').val();
        if (searchCity) {
            sessionStorage.setItem('inputValue', searchCity);
            loadPage();
            $('#searchCity').val('');
        }
    });

    async function getData(location) {
        const API_KEY = '3e07a1f6faffb853835640a3756f830c';
        const urlHourlyWeather = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`;
        let data;
        try {
            data = await fetch(urlHourlyWeather)
                .then(response => response.json());
        } catch (err) {
            console.log(err)
        }
        return data;
    }
    function getImgUrl(data) {
        return `https://openweathermap.org/img/wn/${data}@2x.png`;
    }
    function getWindDirection(deg) {
        let WIND_DIRECTION = '';
        switch (true) {
            case 0:
            case deg == 360:
                WIND_DIRECTION = "N";
                break;
            case deg == 90:
                WIND_DIRECTION = "E";
                break;
            case deg == 180:
                WIND_DIRECTION = "S";
                break;
            case deg == 270:
                WIND_DIRECTION = "W";
                break;
            case (deg > 0 && deg < 90):
                WIND_DIRECTION = "NE";
                break;
            case (deg > 90 && deg < 180):
                WIND_DIRECTION = "SE";
                break;
            case (deg > 180 && deg < 270):
                WIND_DIRECTION = "SW";
                break;
            case (deg > 270 && deg < 360):
                WIND_DIRECTION = "NW";
                break;
            default:
                WIND_DIRECTION = "-";
                break;
        }
        return `${deg} ${WIND_DIRECTION}`;
    }
    function formateTemp(temp) {
        let currentTemp = Math.round(temp - 273);
        return currentTemp + '&#176;C';
    }
    function createCurrentDate() {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        const year = date.getFullYear()
        day = formateDate(day); // add 0 before num
        month = formateDate(month); // add 0 before num

        return `${day}.${month}.${year}`;
    }
    function formateDate(num) {
        return num < 10 ? num = '0' + num : num;
    }

    function showSnackbar(message) {
        $('#snackbar').addClass("show");
        setTimeout(function () { $('#snackbar').removeClass("show"); }, 3000);
        $('#snackbar').html(message);
    }
}


window.addEventListener('load', loadPage);










// async function getData() {
//     try {
//         hourlyWeatherData = await fetch(urlHourlyWeather)
//             .then(response => response.json());
//         if (hourlyWeatherData.cod !== '200') {
//             sessionStorage.setItem('inputValue', sessionStorage.getItem('searchCity'));
//             $('#snackbar').addClass("show");
//             setTimeout(function () { $('#snackbar').removeClass("show"); }, 3000);
//             $('#snackbar').html(hourlyWeatherData.message);
//         } else {
//             sessionStorage.setItem('searchCity', sessionStorage.getItem('inputValue'));
//             drawTodayPage(hourlyWeatherData);
//             console.log('hourlyWeatherData', hourlyWeatherData);
//         }
//     } catch (err) {
//         console.log(err)
//     }
// }