const date = new Date();/**instaciando objeto */
const year = date.getFullYear();
const monthDays = document.querySelector(".days")
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); /**o ultimo dia do mês */
const firstdayIndex = date.getDay(); /*Pega de segunda a sexta*/
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();/**ultimo dia do mês anterior */


document.querySelector("#year").innerHTML = year;/**o ano em html */
document.querySelector("#yearString").innerHTML = date.toDateString();/**data em string */

let days = "";

for(let x = firstdayIndex; x > 0; x--){
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    monthDays.innerHTML = days;
}

for(let i = 1; i <= lastDay; i++){
    days += `<div>${i}</div>`;
    monthDays.innerHTML = days;
}

