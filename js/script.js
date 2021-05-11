const date = new Date(); //*instaciando objeto Date()
const year = date.getFullYear();
document.querySelector("#year").innerHTML = year; //*o ano em html
document.querySelector("#yearString").innerHTML = date.toDateString(); //*data em string

for(let M = 0; M <= 11 ; M++){

    let x = new Date();
    x.setMonth(M);

    let lastDayPrevIndex = new Date(date.getFullYear(), x.getMonth(), 0).getDay() + 1;//*Pegando os index dos dias da semana que terminaram (sunday, monday ...) os meses de 2021 "anterior"

    let lastDay = new Date(date.getFullYear(), x.getMonth() + 1, 0).getDate();//*pegando os ultimos dias dos meses de 2021 "atual"

    let lastDayPrev = new Date(date.getFullYear(), x.getMonth(), 0).getDate();//*pegando os ultimos dias dos mes de 2021 "anterior"

    lastDayIndex = new Date(date.getFullYear(), x.getMonth() + 1, 0).getDay();//*Pegando os index dos dias da semana que terminaram (sunday, monday ...) os meses de 2021 "atual"

    let nextDays = 7 - lastDayIndex - 1;
    
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

    let monthDays = document.querySelector(`${MESES[M]} > .days`);//*Adicionando os dias nos meses

    let days = "";

    for(let d = lastDayPrevIndex; d > 0; d--){ //*Preenchimento da parte superior dos ultimos dias dos meses anteriores     
        days += `<div class="prev-date">${lastDayPrev - d + 1}</div>`;  
    }

    for(let i = 1; i <= lastDay; i++){ //*Acrescentando os dias
        if(i == date.getDate() && M == date.getMonth()){
            days += `<div class ="today">${i}</div>`; 
        }else{
            days += `<div>${i}</div>`;
        }
    }

    for(let j = 1; j <= nextDays; j++){
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
    
}

