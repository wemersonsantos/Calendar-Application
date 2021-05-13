const date = new Date(); //*instaciando objeto Date()
const year = date.getFullYear();
document.querySelector("#year").innerHTML = year; //*o ano em html
document.querySelector("#yearString").innerHTML = date.toDateString(); //*data em string

for(let M = 0; M <= 11 ; M++){

    let x = new Date();
    x.setMonth(M);//*Diferenciando os meses (Jan, Fev, Mar...) pelo index

    let lastDayPrevIndex = new Date(date.getFullYear(), x.getMonth(), 0).getDay() + 1;//*Pegando os index dos dias da semana (sunday, monday ...) do mês "anterior", saber quando acabaram 

    let lastDay = new Date(date.getFullYear(), x.getMonth() + 1, 0).getDate();//*pegando os ultimos dias dos meses de 2021 - "atual"

    let lastDayPrev = new Date(date.getFullYear(), x.getMonth(), 0).getDate();//*pegando os ultimos dias dos meses de 2021 - "anterior"
    
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
    ];//*Array com os meses para selecionar a Div que será preenchida com os dias correspondente

    let monthDays = document.querySelector(`${MESES[M]} > .days`);//*Selecionando o local aonde sera inseridos os dias

    let days = "";//*Valor inicial da div

    for(let d = lastDayPrevIndex; d > 0; d--){ //*Preenchimento da parte superior, com os ultimos dias do mês anterior
        days += `<div class="prev-date ${MESES[M].replaceAll('#','')}">${lastDayPrev - d + 1}</div>`;  
    }//END FOR

    for(let i = 1; i <= lastDay; i++){ //*Acrescentando os dias do mês
        if(i == date.getDate() && M == date.getMonth()){
            days += `<div class ="today ${MESES[M].replaceAll('#','')}">${i}</div>`;//*Marcando o dia atual 
        }else{
            days += `<div class = "${MESES[M].replaceAll('#','')}">${i}</div>`;//*Se não for o dia atual, empreencher normalmente
            monthDays.innerHTML = days;
        }//END ELSE
    }//END FOR
    let lastDayNext = document.querySelectorAll(`.days > .${MESES[M].replaceAll('#','')}`);//*Seleciona as quantidades de dias por mês
    ab: while(lastDayNext.length < 42){//*Desejei que os meses estivessem 42 dias no total, contando com os dias do mês e a previa anterior e do próximo mês
        for(let j = 1; j <= 30; j++){//*O número 30 foi algo que adicionei aleatoriamente. Usado para complementar os dias dos próximos meses
            days += `<div class="next-date ${MESES[M].replaceAll('#','')}">${j}</div>`;//*Preenchimento da parte inferior, com os primeiros dias do mês seguinte
            monthDays.innerHTML = days;
            lastDayNext = document.querySelectorAll(`.days > .${MESES[M].replaceAll('#','')}`); //*Atualizando o valor
             if(lastDayNext.length == 42){
                 break ab;//*Encerrando o laço de repetição
             }//END IF
        }//END FOR
    }//END WHILE      
}//END FOR



