const date = new Date();/**instaciando objeto */
const year = date.getFullYear();
const monthDays = document.querySelector(".days");
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); /**o ultimo dia do mês */
const firstdayIndex = date.getDay(); /*Pega de segunda a sexta*/
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();/**ultimo dia do mês anterior */
let m,n;


const dMounth = document.querySelectorAll("[data-mounth]");

dMounth.forEach(mounth =>{
    let x = new Date();
    x.setMonth(mounth.dataset.mounth);

    n = x.getDay();//!Pegando os dias da semana que terminaram os meses de 2021
    m = new Date(date.getFullYear(), x.getMonth() + 1, 0).getDate();//!pegando os ultimos dias dos meses de 2021
 
})


document.querySelector("#year").innerHTML = year;/**o ano em html */
document.querySelector("#yearString").innerHTML = date.toDateString();/**data em string */

let days = "";

for(let x = n; x > 0; x--){
    days += `<div class="prev-date">${m - x + 1}</div>`;
    
}

for(let i = 1; i <= m; i++){
    days += `<div>${i}</div>`;
    monthDays.innerHTML = days;
}

