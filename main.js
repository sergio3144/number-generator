const horaLocal = () => {
    let fecha = new Date();
    document.querySelector('.annio').innerHTML = `Granada Meta ${fecha.getFullYear()}`;

    let hr = fechaFuncionMostrar(fecha.getHours());
    let min = fechaFuncionMostrar(fecha.getMinutes());
    let sec = fechaFuncionMostrar(fecha.getSeconds());

    document.querySelector('.hr').innerHTML = hr + '-'
    document.querySelector('.min').innerHTML = min + '-'
    document.querySelector('.sec').innerHTML = sec;


}

function fechaFuncionMostrar(hora) {
    if(hora < 10) {
        hora = '0' + hora
    }
    return hora
}

setInterval(horaLocal, 1000)


