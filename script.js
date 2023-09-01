const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form")
const search = document.querySelector("#search")
const row2 = document.querySelector(".row2")


const getData = async(city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    showData(data);
}

const showData = (data)=>{
    row2.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" height="150px">

    <div id="temp">
        ${data.main.temp}&deg;
    </div>

    <div id="min_max"> ${data.main.temp_max}&deg; &nbsp; &nbsp; ${data.main.temp_min}&deg; </div>
    <p id="msg"> ${data.weather[0].main}</p>`

}

form.addEventListener("submit", function(event) {
    //will collect the data function
    getData(search.value);
    event.preventDefault()
})