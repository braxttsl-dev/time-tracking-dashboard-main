 
const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly")
const monthly = document.querySelector("#monthly")
const selectMenu = document.querySelectorAll(".user-select")

const getInfo = () => fetch("data.json")
    .then(response => response.json())
    .then(data => data.forEach(track => {
        console.log(track.title.toLowerCase())
        document.querySelector(`#${track.title.toLowerCase()}-title`).textContent = `${track.title}`
        document.querySelector(`#${track.title.toLowerCase()}-current`).textContent = `${track.timeframes.daily.current}hrs`
        document.querySelector(`#${track.title.toLowerCase()}-previous`).textContent = `Last Week - ${track.timeframes.daily.previous}hrs`
        
        daily.addEventListener("click", () => {
            document.querySelector(`#${track.title.toLowerCase()}-current`).textContent = `${track.timeframes.daily.current}hrs`
            document.querySelector(`#${track.title.toLowerCase()}-previous`).textContent = `Last Week - ${track.timeframes.daily.previous}hrs`
        })
        weekly.addEventListener("click", () => {
            document.querySelector(`#${track.title.toLowerCase()}-current`).textContent = `${track.timeframes.weekly.current}hrs`
            document.querySelector(`#${track.title.toLowerCase()}-previous`).textContent = `Last Week - ${track.timeframes.weekly.previous}hrs`
        })

        monthly.addEventListener("click", () => {
            document.querySelector(`#${track.title.toLowerCase()}-current`).textContent = `${track.timeframes.monthly.current}hrs`
            document.querySelector(`#${track.title.toLowerCase()}-previous`).textContent = `Last Week - ${track.timeframes.monthly.previous}hrs`
        })

    }))

    getInfo()





