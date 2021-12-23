// Dark mode toggle
document.getElementById('dark-mode-switch').onclick = () => {
    document.querySelector('body').classList.toggle('dark')
    document.querySelector('body').classList.toggle('light')
}
// Validate if is leap year
isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0)
        || (year % 100 === 0 && year % 400 === 0)
}

// Get february days
getLeapFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

let month_picker = document.querySelector('#month-picker')
month_picker.onclick = () => {
    month_list.classList.add('show')
}
//

let calendar = document.getElementsByClassName('.calendar')
const month_names = ['January', 'February', 'March', 'April', 'May','June','July', 'August','September','October', 'November','December']

// Generate calendar
generateCalendar = (month, year) => {
    let calendar_days = document.querySelector('.calendar-days')
    calendar_days.innerHTML = ''
    let calendar_header_year = document.querySelector('#year')
    let days_of_month = [31, getLeapFebDays(year),31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let currentDate = new Date();
    month_picker.innerHTML = month_names[month]
    calendar_header_year.innerHTML = year

    let first_day = new Date(month, year, 1)

    for (let index = 1; index <= days_of_month[month] + first_day.getDay() - 1; index++) {
        const day = document.createElement('div')
        if (index >= first_day.getDay()){
            day.classList.add('calendar-day-hover')
            day.innerHTML = index - first_day.getDay() + 1
            day.innerHTML += `<span></span><span></span><span></span><span></span>`

            if(index - first_day.getDay() + 1 === currentDate.getDate() && year ===
            currentDate.getFullYear() && month === currentDate.getMonth()){
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = document.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div>${e}</div>`
    month.onclick = () => {
        month_list.classList.remove('show')
        currMonth.value = index
        generateCalendar(currMonth.value, currYear.value)
    }
    month_list.appendChild(month)
})

//
document.querySelector('#prev-year').onclick = () => {
    --currYear.value
    generateCalendar(currMonth.value, currYear.value)
}
document.querySelector('#next-year').onclick = () => {
    ++currYear.value
    generateCalendar(currMonth.value, currYear.value)
}

let currDate = new Date();
console.log(currDate)

let currMonth = {value: currDate.getMonth()};

let currYear = {value: currDate.getFullYear()};

generateCalendar(currMonth.value, currYear.value);