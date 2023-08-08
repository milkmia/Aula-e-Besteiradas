var agora = new Date()
var diaSemana = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

//console.log(diaSemana)

switch(diaSemana) {
    case 0:
        console.log(`domingo`)
        break
    case 1:
        console.log(`segunda`)
        break
    case 2:
        console.log(`terça`)
        break
    case 3:
        console.log(`quarta`)
        break
    case 4:
        console.log(`quinta`)
        break
    case 5:
        console.log(`sexta`)
        break
        case 6:
        console.log(`sábado`)
        break
}