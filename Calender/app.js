let dateNew = new Date()

let days = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]

let months =["Jan", "Feb", "Mar","Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

let date = document.querySelector('#date')
let day = document.querySelector('#day')
let month = document.querySelector('#month')
let year = document.querySelector('#year')

date.innerHTML = dateNew.getDate()
day.innerHTML = days[dateNew.getDay()]
month.innerHTML =months[dateNew.getMonth()]
year.innerHTML = dateNew.getFullYear()

