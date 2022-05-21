
let CitiesData = {
    tehran: { City: "Tehran", temp: 15, weader: "Sunny", humidity: 4, windspeed: 6 },
    tabriz: { City: "Tabriz", temp: 4, weader: "Windy", humidity: 2, windspeed: 8 },
    lorestean: { City: "Lorestean", temp: 3, weader: "Rainy", humidity: 9, windspeed: 12 },
    esfahan: { City: "Esfahan", temp: 6, weader: "Snowy", humidity: 3, windspeed: 6 },
}
let $ = document
let SearchButton = $.querySelector(".SearchButton")
let searchBar = $.querySelector(".search-bar")
SearchButton.addEventListener("click", function () {
    let searchBarValue = searchBar.value
    let cityData = CitiesData[searchBarValue]
    if (cityData) {
        $.querySelector(".city").innerHTML = "Weather in" + cityData.City
        $.querySelector(".temp").innerHTML = cityData.temp + "°C"
        $.querySelector(".description").innerHTML = cityData.weader
        $.querySelector(".humidity").innerHTML = "Humidity :" + cityData.humidity + "%"
        $.querySelector(".wind").innerHTML = "Wind speed : "+cityData.windspeed + "Km/h"
        $.querySelector(".weather").classList.remove("loading")
    }else{
        alert("نام شهر را به درستی وارد کنید؟")
    }
})/*
let CitiesData = [
     { City: "Tehran", temp: 15, weader: "Sunny", humidity: 4, windspeed: 6 },
     { City: "Tabriz", temp: 4, weader: "Windy", humidity: 2, windspeed: 8 },
     { City: "Lorestean", temp: 3, weader: "Rainy", humidity: 9, windspeed: 12 },
     { City: "Esfahan", temp: 6, weader: "Snowy", humidity: 3, windspeed: 6 },
]
let $=document
let searchButton=$.querySelector("SearchButton")
let searchBar=$.querySelector("search-bar")
  searchButton.addEventListener('click',function(){
    let searchBarValue=searchBar.Value
    let citydata=CitiesData.find(function (item) {
        return item.City=searchBarValue
    })
    if (citydata) {
        $.querySelector(".city").innerHTML = "Weather in" + cityData.City
        $.querySelector(".temp").innerHTML = cityData.temp + "°C"
        $.querySelector(".description").innerHTML = cityData.weader
        $.querySelector(".humidity").innerHTML = "Humidity :" + cityData.humidity + "%"
        $.querySelector(".wind").innerHTML = "Wind speed : "+cityData.windspeed + "Km/h"
        $.querySelector(".weather").classList.remove("loading")
    }else{
        alert("نام شهر را به درستی وارد کنید؟")
    }
    })*/