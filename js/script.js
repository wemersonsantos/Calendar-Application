const date = new Date();/**instaciando objeto */
const year = date.getFullYear();

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); /**o ultimo dia do mês */
const firstdayIndex = date.getDay(); /*Pega de segunda a sexta*/
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();/**ultimo dia do mês anterior */
let m,n;

for(let fg = 0; fg <= 11 ; fg++){

    let x = new Date();
    x.setMonth(fg);

    n = x.getDay();//!Pegando os dias da semana que terminaram os meses de 2021
    m = new Date(date.getFullYear(), x.getMonth() + 1, 0).getDate();//!pegando os ultimos dias dos meses de 2021
   // o = new Date(date.getFullYear(), x.getMonth(), 1).getDate();
    console.log(n)

    const MESES = [
        '#Jan',
        '#Fev',
        '#Mar',
        '#April',
        '#May',
        '#June',
        '#July',
        '#Aug',
        '#Sep',
        '#Oct',
        '#Nov',
        '#Dec'
    ];
    let monthDays = document.querySelector(`${MESES[fg]} > .days`);
    let days = "";



for(let x = n; x > 0; x--){//Preenchimento da parte superior dos ultimos dias dos meses anteriores
    days += `<div class="prev-date">${m - x + 1}</div>`;
    
}

for(let i = 1; i <= m; i++){//Acrescentando os dias
    days += `<div>${i}</div>`;
    monthDays.innerHTML = days;
}
}


document.querySelector("#year").innerHTML = year;/**o ano em html */
document.querySelector("#yearString").innerHTML = date.toDateString();/**data em string */



