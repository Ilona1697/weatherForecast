"use strict";
function loadPage() {
    const API_KEY = '4bdfa40a663d0fc243b9f98fb3c8e128';
    const cities = ['Kyiv', 'Lviv', 'Odessa', 'Kharkiv'];
    const url = 'http://api.openweathermap.org/data/2.5/forecast?';
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    if (!sessionStorage.getItem('searchCity')) {
        sessionStorage.setItem('searchCity', 'Rivne');
    }
    if (!sessionStorage.getItem('activePage')) {
        sessionStorage.setItem('activePage', 'today');
        $('#todayBtn').addClass('active');
        $('#weekBtn').removeClass('active');
    }
    if (sessionStorage.getItem('activePage') == 'week') {
        $('#todayBtn').removeClass('active');
        $('#weekBtn').addClass('active');
    } else {
        $('#todayBtn').addClass('active');
        $('#weekBtn').removeClass('active');
    }
    getData();

    $('#searchForm').submit((e) => {
        e.preventDefault();
        const searchCity = $('#searchCity').val();
        if (searchCity) {
            sessionStorage.setItem('inputValue', searchCity);
            getData();
            $('#searchCity').val('');
        }
    });
    $('#todayBtn').click((e) => {
        $('#todayBtn').addClass('active');
        $('#weekBtn').removeClass('active');
        sessionStorage.setItem('activePage', 'today');
        getData();
    });
    $('#weekBtn').click((e) => {
        $('#todayBtn').removeClass('active');
        $('#weekBtn').addClass('active');
        sessionStorage.setItem('activePage', 'week');
        getData();
    });

    async function getData() {
        const location = sessionStorage.getItem('inputValue') || sessionStorage.getItem('searchCity');
        const urlHourlyWeather = url + `q=${location}&appid=${API_KEY}`;
        showLoader();
        try {
            const data = await fetch(urlHourlyWeather)
                .then(res => res.json());
            hideLoader();
            if (data.cod !== '200') {
                sessionStorage.setItem('inputValue', sessionStorage.getItem('searchCity'));
                showSnackbar(data.message);
            } else {
                sessionStorage.setItem('searchCity', location);

                if (sessionStorage.getItem('activePage') == 'today') {
                    drawTodayPage(data);
                } else {
                    drawFiveDaysPage(data);
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
    function drawFiveDaysPage(data) {
        $('#currentBlock').html('');
        $('#currentBlock').addClass('days');
        $('#itc-slider__items').html('');
        $('#otherCitiesBlock').addClass('hide');

        const date = getDate();
        let day = formateDate(date.day);
        const sixDaysData = data.list.filter(elem => {
            if (elem.dt_txt.startsWith(`${date.year}-${date.month}-${day}`)) {
                day++;
                day = formateDate(day);

                return true;
            }
        });
        drawDailyBlock(sixDaysData);
        const todayHourlyData = data.list.filter(elem => {
            if (elem.dt_txt.startsWith(`${date.year}-${date.month}-${date.day}`)) {
                return true;
            }
        });
        drawHourlyWeatherSlider(todayHourlyData);
        $('.days__item').each(function () {
            this.addEventListener('click', function () {
                // 

                const date = this.dataset.date;
                const todayHourlyData = data.list.filter(elem => {
                    if (elem.dt_txt.startsWith(date)) {
                        return true;
                    }
                });
                drawHourlyWeatherSlider(todayHourlyData);

                $('.days__item').each(function () {
                    this.classList.remove('active');
                });
                this.classList.add('active');
            });
        })

        function drawDailyBlock(data) {
            data.map((day, index) => {
                if (index < 6) {
                    const today = new Date(day.dt_txt);
                    let title = days[today.getDay()];
                    const date = `${month[today.getMonth() + 1]} ${today.getDate()}`;
                    const img = getImgUrl(day.weather[0].icon);

                    const temp = formateTemp(day.main.temp);
                    let description = day.weather[0].description;
                    description = description[0].toUpperCase() + description.slice(1);
                    const dataDate = `${today.getFullYear()}-${formateDate(today.getMonth() + 1)}-${formateDate(today.getDate())}`;
                    if (new Date().getDate() == today.getDate()) {
                        title = 'Tonight';
                    }
                    $('#currentBlock').append(`<div class="days__item" 
                    data-date="${dataDate}">
                        <div class="days__title">${title}</div>
                        <div class="days__date">${date}</div>
                        <div class="days__img"><img src="${img}" alt="" /></div>
                        <div class="days__temp">${temp}</div>
                        <div class="days__description">${description}</div>
                    </div>`);
                } else {
                    return;
                }
            });
        }
    }
    function drawHourlyWeatherSlider(data) {
        if (data) {
            $('#itc-slider__items').html('');
            data.map((elem, index) => {
                if (index > 5) {
                    return;
                } else {
                    const temp = formateTemp(elem.main.temp);
                    const feelTemp = formateTemp(elem.main["feels_like"]);
                    const iconUrl = getImgUrl(elem.weather[0].icon);
                    const windDirection = getWindDirection(elem.wind.deg);
                    const description = elem.weather[0].description;
                    const time = getTime(elem.dt_txt);
                    $('#itc-slider__items').append(`<div class="col itc-slider__item">
                        <div class="row hourNum">${time.hour}:${time.minute}</div>
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
    function drawTodayPage(data) {
        $('#otherCitiesBlock').removeClass('hide');
        $('#currentBlock').removeClass('days');
        $('#otherCitiesBlock').html('');

        const date = getDate();
        const todayHourlyData = data.list.filter(elem => {
            if (elem.dt_txt.startsWith(`${date.year}-${date.month}-${date.day}`)) {
                return true;
            }
        });


        drawCurrentWeather(data);
        drawHourlyWeatherSlider(todayHourlyData);

        cities.map(city => {
            getOtherCityData(city);
        });
    }
    function drawCurrentWeather(data) {
        let todayDate = createCurrentDate();
        let currentTemp = formateTemp(data.list[0].main.temp);
        let description = data.list[0].weather[0].description;
        let realTemp = formateTemp(data.list[0].main["feels_like"]);
        let iconUrl = getImgUrl(data.list[0].weather[0].icon);
        let population = data.city.population;
        let clouds = data.list[0].clouds.all;
        let humidity = data.list[0].main.humidity;

        $('#currentBlock').html(`<div class="current__header">
                <h2 class="title">Current weather</h2>
                <div class="info">
                    <div class="cityName" id="cityName">${data.city.name}</div>
                    <div class="date" id="todayDate">${todayDate}</div>
                </div>
            </div>
            <div class="current__body">
                <div class="current__img">
                    <img src="${iconUrl}" alt="" id="icon" />
                    <div class="weather" id="weatherName">${description}</div>
                </div>
                <div class="current__temp">
                    <div class="temp" id="currentTemp">${currentTemp}</div>
                    <div class="realTemp">real temp <span id="realTemp">${realTemp}</span></div>
                </div>
                <div class="current__info">
                    <div class="population">Population: <span id="population">${population}</span></div>
                    <div class="clouds">Clouds: <span id="clouds">${clouds}%</span></div>
                    <div class="humidity">Humidity: <span id="humidity">${humidity + '%'}</span></div>
                </div>
            </div>`);
    }
    async function getOtherCityData(city) {
        const data = await fetch(url + `q=${city}&appid=${API_KEY}`)
            .then(res => res.json());

        drawOtherCities({
            city: data.city.name,
            img: getImgUrl(data.list[0].weather[0].icon),
            temp: formateTemp(data.list[0].main.temp)
        });
    }
    function drawOtherCities({ city, img, temp }) {
        $('#otherCitiesBlock').append(`<div class="place">
            <div class="city">${city}</div>
            <div class="img"><img src="${img}" alt="" /></div>
            <div class="temp">${temp}</div>
        </div>`);
    }
    /* addition functional */
    function showLoader() {
        $(".loader_inner").fadeIn(100);
        $(".loader").fadeIn(100);
    }
    function hideLoader() {
        $(".loader_inner").fadeOut();
        $(".loader").delay(300).fadeOut("slow");
    }
    function getDate() {
        const currentYear = new Date().getFullYear();
        const currentMonth = formateDate(new Date().getMonth() + 1);
        const currentDay = formateDate(new Date().getDate());
        return {
            year: currentYear,
            month: currentMonth,
            day: currentDay
        }
    }
    function getTime(str) {
        let date = new Date(str);
        let hour = formateDate(date.getHours());
        let minute = formateDate(date.getMinutes());
        return { hour, minute };
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
        if (('' + num).length > 1) {
            return num;
        } else if (num < 10) {
            return '0' + num;
        }
        return num;
    }
    function showSnackbar(message) {
        $('#snackbar').addClass("show");
        setTimeout(function () { $('#snackbar').removeClass("show"); }, 3000);
        $('#snackbar').html(message);
    }
}

window.addEventListener('load', loadPage);
