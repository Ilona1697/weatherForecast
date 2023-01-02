"use strict";
const fakeData = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1672660800,
            "main": {
                "temp": 283.89,
                "feels_like": 283.03,
                "temp_min": 283.89,
                "temp_max": 283.89,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 999,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 79
            },
            "wind": {
                "speed": 2.83,
                "deg": 221,
                "gust": 7.38
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-01-02 12:00:00"
        },
        {
            "dt": 1672671600,
            "main": {
                "temp": 283.32,
                "feels_like": 282.43,
                "temp_min": 282.18,
                "temp_max": 283.32,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 998,
                "humidity": 78,
                "temp_kf": 1.14
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 79
            },
            "wind": {
                "speed": 3.22,
                "deg": 201,
                "gust": 4.65
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-02 15:00:00"
        },
        {
            "dt": 1672682400,
            "main": {
                "temp": 282.06,
                "feels_like": 280.02,
                "temp_min": 281.15,
                "temp_max": 282.06,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 997,
                "humidity": 79,
                "temp_kf": 0.91
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 85
            },
            "wind": {
                "speed": 3.58,
                "deg": 201,
                "gust": 6.87
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-02 18:00:00"
        },
        {
            "dt": 1672693200,
            "main": {
                "temp": 280.5,
                "feels_like": 277.96,
                "temp_min": 280.5,
                "temp_max": 280.5,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 997,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 3.87,
                "deg": 231,
                "gust": 11.46
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-02 21:00:00"
        },
        {
            "dt": 1672704000,
            "main": {
                "temp": 280.54,
                "feels_like": 277.65,
                "temp_min": 280.54,
                "temp_max": 280.54,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 996,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 58
            },
            "wind": {
                "speed": 4.61,
                "deg": 234,
                "gust": 13.36
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-03 00:00:00"
        },
        {
            "dt": 1672714800,
            "main": {
                "temp": 279.82,
                "feels_like": 276.17,
                "temp_min": 279.82,
                "temp_max": 279.82,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 995,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 6,
                "deg": 268,
                "gust": 13.05
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-03 03:00:00"
        },
        {
            "dt": 1672725600,
            "main": {
                "temp": 279.21,
                "feels_like": 275.76,
                "temp_min": 279.21,
                "temp_max": 279.21,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 997,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 5.11,
                "deg": 266,
                "gust": 11.56
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-03 06:00:00"
        },
        {
            "dt": 1672736400,
            "main": {
                "temp": 280.43,
                "feels_like": 277.33,
                "temp_min": 280.43,
                "temp_max": 280.43,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 998,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.01,
                "deg": 273,
                "gust": 11.19
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-01-03 09:00:00"
        },
        {
            "dt": 1672747200,
            "main": {
                "temp": 281.39,
                "feels_like": 278.32,
                "temp_min": 281.39,
                "temp_max": 281.39,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 998,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.56,
                "deg": 280,
                "gust": 11.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-01-03 12:00:00"
        },
        {
            "dt": 1672758000,
            "main": {
                "temp": 280.12,
                "feels_like": 276.78,
                "temp_min": 280.12,
                "temp_max": 280.12,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 999,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.41,
                "deg": 281,
                "gust": 11.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-03 15:00:00"
        },
        {
            "dt": 1672768800,
            "main": {
                "temp": 278.6,
                "feels_like": 274.67,
                "temp_min": 278.6,
                "temp_max": 278.6,
                "pressure": 1026,
                "sea_level": 1026,
                "grnd_level": 1000,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 5.87,
                "deg": 291,
                "gust": 12.04
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-03 18:00:00"
        },
        {
            "dt": 1672779600,
            "main": {
                "temp": 276.91,
                "feels_like": 272.84,
                "temp_min": 276.91,
                "temp_max": 276.91,
                "pressure": 1027,
                "sea_level": 1027,
                "grnd_level": 1001,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 55
            },
            "wind": {
                "speed": 5.2,
                "deg": 291,
                "gust": 11.09
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-03 21:00:00"
        },
        {
            "dt": 1672790400,
            "main": {
                "temp": 275.69,
                "feels_like": 271.48,
                "temp_min": 275.69,
                "temp_max": 275.69,
                "pressure": 1027,
                "sea_level": 1027,
                "grnd_level": 1002,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 31
            },
            "wind": {
                "speed": 4.86,
                "deg": 286,
                "gust": 10.86
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-04 00:00:00"
        },
        {
            "dt": 1672801200,
            "main": {
                "temp": 274.46,
                "feels_like": 270.52,
                "temp_min": 274.46,
                "temp_max": 274.46,
                "pressure": 1028,
                "sea_level": 1028,
                "grnd_level": 1002,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 3.93,
                "deg": 285,
                "gust": 9.46
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-04 03:00:00"
        },
        {
            "dt": 1672812000,
            "main": {
                "temp": 273.27,
                "feels_like": 269.62,
                "temp_min": 273.27,
                "temp_max": 273.27,
                "pressure": 1028,
                "sea_level": 1028,
                "grnd_level": 1002,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 3.2,
                "deg": 273,
                "gust": 8.03
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-04 06:00:00"
        },
        {
            "dt": 1672822800,
            "main": {
                "temp": 275.66,
                "feels_like": 272.15,
                "temp_min": 275.66,
                "temp_max": 275.66,
                "pressure": 1027,
                "sea_level": 1027,
                "grnd_level": 1002,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 16
            },
            "wind": {
                "speed": 3.69,
                "deg": 258,
                "gust": 6.35
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-01-04 09:00:00"
        },
        {
            "dt": 1672833600,
            "main": {
                "temp": 277.02,
                "feels_like": 273.74,
                "temp_min": 277.02,
                "temp_max": 277.02,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 999,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 41
            },
            "wind": {
                "speed": 3.81,
                "deg": 233,
                "gust": 6.64
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-01-04 12:00:00"
        },
        {
            "dt": 1672844400,
            "main": {
                "temp": 275.53,
                "feels_like": 271.87,
                "temp_min": 275.53,
                "temp_max": 275.53,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 997,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.87,
                "deg": 184,
                "gust": 8.64
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-04 15:00:00"
        },
        {
            "dt": 1672855200,
            "main": {
                "temp": 277.17,
                "feels_like": 272.46,
                "temp_min": 277.17,
                "temp_max": 277.17,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 993,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 6.86,
                "deg": 207,
                "gust": 16.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-04 18:00:00"
        },
        {
            "dt": 1672866000,
            "main": {
                "temp": 278.68,
                "feels_like": 273.82,
                "temp_min": 278.68,
                "temp_max": 278.68,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 990,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.64,
                "deg": 227,
                "gust": 18.19
            },
            "visibility": 10000,
            "pop": 0.16,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-04 21:00:00"
        },
        {
            "dt": 1672876800,
            "main": {
                "temp": 279.76,
                "feels_like": 274.87,
                "temp_min": 279.76,
                "temp_max": 279.76,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 986,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.99,
                "deg": 242,
                "gust": 18.72
            },
            "visibility": 10000,
            "pop": 0.74,
            "rain": {
                "3h": 1.06
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-05 00:00:00"
        },
        {
            "dt": 1672887600,
            "main": {
                "temp": 280.11,
                "feels_like": 275.37,
                "temp_min": 280.11,
                "temp_max": 280.11,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 983,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.85,
                "deg": 246,
                "gust": 17.66
            },
            "visibility": 10000,
            "pop": 0.41,
            "rain": {
                "3h": 0.32
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-05 03:00:00"
        },
        {
            "dt": 1672898400,
            "main": {
                "temp": 280.41,
                "feels_like": 275.61,
                "temp_min": 280.41,
                "temp_max": 280.41,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 980,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.54,
                "deg": 250,
                "gust": 20
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.12
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-05 06:00:00"
        },
        {
            "dt": 1672909200,
            "main": {
                "temp": 281.44,
                "feels_like": 276.72,
                "temp_min": 281.44,
                "temp_max": 281.44,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 980,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 11.75,
                "deg": 264,
                "gust": 19.79
            },
            "visibility": 10000,
            "pop": 0.9,
            "rain": {
                "3h": 1.47
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-01-05 09:00:00"
        },
        {
            "dt": 1672920000,
            "main": {
                "temp": 280.88,
                "feels_like": 276.55,
                "temp_min": 280.88,
                "temp_max": 280.88,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 980,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.19,
                "deg": 277,
                "gust": 16.71
            },
            "visibility": 10000,
            "pop": 0.92,
            "rain": {
                "3h": 0.55
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-01-05 12:00:00"
        },
        {
            "dt": 1672930800,
            "main": {
                "temp": 280.63,
                "feels_like": 275.99,
                "temp_min": 280.63,
                "temp_max": 280.63,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 980,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 10.15,
                "deg": 269,
                "gust": 16.57
            },
            "visibility": 10000,
            "pop": 0.26,
            "rain": {
                "3h": 0.12
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-05 15:00:00"
        },
        {
            "dt": 1672941600,
            "main": {
                "temp": 279.76,
                "feels_like": 274.84,
                "temp_min": 279.76,
                "temp_max": 279.76,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 979,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 10.13,
                "deg": 269,
                "gust": 17.96
            },
            "visibility": 8477,
            "pop": 0.58,
            "rain": {
                "3h": 1.02
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-05 18:00:00"
        },
        {
            "dt": 1672952400,
            "main": {
                "temp": 277.11,
                "feels_like": 271.13,
                "temp_min": 277.11,
                "temp_max": 277.11,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 981,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 91
            },
            "wind": {
                "speed": 10.87,
                "deg": 292,
                "gust": 17.65
            },
            "visibility": 10000,
            "pop": 0.89,
            "snow": {
                "3h": 1.02
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-05 21:00:00"
        },
        {
            "dt": 1672963200,
            "main": {
                "temp": 275.55,
                "feels_like": 269,
                "temp_min": 275.55,
                "temp_max": 275.55,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 982,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 11.03,
                "deg": 289,
                "gust": 17.43
            },
            "visibility": 10000,
            "pop": 0.7,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-06 00:00:00"
        },
        {
            "dt": 1672974000,
            "main": {
                "temp": 272.5,
                "feels_like": 265.5,
                "temp_min": 272.5,
                "temp_max": 272.5,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 985,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 9.85,
                "deg": 308,
                "gust": 16.18
            },
            "visibility": 10000,
            "pop": 0.2,
            "snow": {
                "3h": 0.22
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-06 03:00:00"
        },
        {
            "dt": 1672984800,
            "main": {
                "temp": 271.25,
                "feels_like": 264.4,
                "temp_min": 271.25,
                "temp_max": 271.25,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 988,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 7.9,
                "deg": 309,
                "gust": 12.99
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-06 06:00:00"
        },
        {
            "dt": 1672995600,
            "main": {
                "temp": 271.85,
                "feels_like": 265.67,
                "temp_min": 271.85,
                "temp_max": 271.85,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 991,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 6.77,
                "deg": 308,
                "gust": 9.01
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-01-06 09:00:00"
        },
        {
            "dt": 1673006400,
            "main": {
                "temp": 272.33,
                "feels_like": 266.93,
                "temp_min": 272.33,
                "temp_max": 272.33,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 990,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 5.49,
                "deg": 308,
                "gust": 7.24
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-01-06 12:00:00"
        },
        {
            "dt": 1673017200,
            "main": {
                "temp": 271.51,
                "feels_like": 267.9,
                "temp_min": 271.51,
                "temp_max": 271.51,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 989,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.77,
                "deg": 353,
                "gust": 3.98
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-06 15:00:00"
        },
        {
            "dt": 1673028000,
            "main": {
                "temp": 270.8,
                "feels_like": 266.87,
                "temp_min": 270.8,
                "temp_max": 270.8,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 989,
                "humidity": 50,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.96,
                "deg": 60,
                "gust": 2.96
            },
            "visibility": 10000,
            "pop": 0.02,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-06 18:00:00"
        },
        {
            "dt": 1673038800,
            "main": {
                "temp": 270.16,
                "feels_like": 266.01,
                "temp_min": 270.16,
                "temp_max": 270.16,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 988,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.05,
                "deg": 98,
                "gust": 3.46
            },
            "visibility": 8752,
            "pop": 0.35,
            "snow": {
                "3h": 0.14
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-06 21:00:00"
        },
        {
            "dt": 1673049600,
            "main": {
                "temp": 268.9,
                "feels_like": 262.88,
                "temp_min": 268.9,
                "temp_max": 268.9,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 987,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.06,
                "deg": 82,
                "gust": 6.73
            },
            "visibility": 727,
            "pop": 0.55,
            "snow": {
                "3h": 0.71
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-07 00:00:00"
        },
        {
            "dt": 1673060400,
            "main": {
                "temp": 267.86,
                "feels_like": 261.38,
                "temp_min": 267.86,
                "temp_max": 267.86,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 987,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.36,
                "deg": 56,
                "gust": 8.1
            },
            "visibility": 154,
            "pop": 0.98,
            "snow": {
                "3h": 3.69
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-07 03:00:00"
        },
        {
            "dt": 1673071200,
            "main": {
                "temp": 267.16,
                "feels_like": 260.7,
                "temp_min": 267.16,
                "temp_max": 267.16,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 990,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.06,
                "deg": 41,
                "gust": 7.87
            },
            "visibility": 8781,
            "pop": 0.94,
            "snow": {
                "3h": 1.57
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-07 06:00:00"
        },
        {
            "dt": 1673082000,
            "main": {
                "temp": 266.62,
                "feels_like": 259.83,
                "temp_min": 266.62,
                "temp_max": 266.62,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 995,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 58
            },
            "wind": {
                "speed": 5.35,
                "deg": 19,
                "gust": 7.02
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-01-07 09:00:00"
        }
    ],
    "city": {
        "id": 695594,
        "name": "Rivne",
        "coord": {
            "lat": 50.6231,
            "lon": 26.2274
        },
        "country": "UA",
        "population": 255106,
        "timezone": 7200,
        "sunrise": 1672640183,
        "sunset": 1672669265
    }
}

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