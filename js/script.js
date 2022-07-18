
let $ = document

const SearchButton = $.querySelector(".SearchButton")
const searchBar = $.querySelector(".search-bar")
let apiData={
    url:'https://api.openweathermap.org/data/2.5/weather?q=',
    key:'2192343557a9f9572d9adf473473bd26'
}


const fetchData=(e)=>{
    let searchBarValue = searchBar.value
    console.log(searchBarValue)
    fetch(`${apiData.url} ${searchBarValue}&&appid=${apiData.key}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        showData(data)
    }).catch(err =>{
        alert("city not found")
    })
}

const showData=(data)=>{
    let divWeather =$.querySelector(".weather")
    divWeather.classList.remove("loading")

    
     let city =$.querySelector(".city")
     city.innerHTML=`${data.name} , ${data.sys.country}`
    
    let temp=$.querySelector(".temp")
    temp.innerHTML=`${Math.floor(data.main.temp-273.15)}°C `
    
    let hiLow=$.querySelector(".hi-low")
    hiLow.innerHTML=`${Math.floor(data.main.temp_min-273.15)}°C/ ${Math.floor(data.main.temp_max-273.15)}°C`
    
    let description=$.querySelector(".description")
    description.innerHTML =`${data.weather[0].main}`
    
    let dateElem = document.querySelector('.date')
    dateElem.innerHTML = showDate()
}

function showDate () {


    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()
    
    return `${day} ${date} ${month} ${year}`

}
SearchButton.addEventListener("click", function (event) {
    event.preventDefault()

    fetchData()
})
searchBar.addEventListener("keypress",(event)=>{
    if(event.keyCode === 13) {
        fetchData()
    }
})