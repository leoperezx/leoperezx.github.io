// hora del sistema

const MESES = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]
// funcion flecha que pone el mes de acuerdo a date()
const monthByNumber = (mes) => { return MESES[mes] }

function imagenDia(numeroDelDia){
    // Crear una funcion  que reciba el numeroDia y ejecute los cambios en la imagen
    // Agregar una clase en la imagen para cada dia que debe mostrar
    const image = document.querySelector(".ventana img")

    switch (numeroDelDia) {
        case 0: image.style.top = '-270px'; image.classList.add("domingo"); break;
        case 1: image.style.top = '-10px'; image.classList.add("lunes"); break;
        case 2: image.style.top = '-54px'; image.classList.add("martes"); break;
        case 3: image.style.top = '-96px'; image.classList.add("miercoles"); break;
        case 4: image.style.top = '-140px'; image.classList.add("jueves"); break;
        case 5: image.style.top = '-184px'; image.classList.add("viernes"); break;
        case 6: image.style.top = '-228px'; image.classList.add("sabado"); break;
        
    }

}

function obtenerSaludo(hora_actual,dia_actual,mes_actual,ano_actual){
    
    const estiloHora = { styleName: 'mañana', saludo: 'Buenos días' }
    if (hora_actual < 13) { estiloHora.saludo = "Buenos días"; estiloHora.styleName = "morning" }
    else if (hora_actual < 19) { estiloHora.saludo = "Buenas tardes"; estiloHora.styleName = "afternoon" }
    else if (hora_actual < 24) { estiloHora.saludo = "Buenas noches"; estiloHora.styleName = "night" }

    document.querySelector(".hello").innerHTML = estiloHora.saludo
    document.querySelector(".today").innerHTML = `Hoy es ${dia_actual} de ${monthByNumber(mes_actual)} de ${ano_actual}`
    document.querySelector(".ventana").classList.add(estiloHora.styleName)
}



function obtenerFecha() {
    const fecha = new Date()
    const numeroDia = fecha.getDay()
    const hora = fecha.getHours()
    const dia = fecha.getDate()
    const mes = fecha.getMonth()
    const ano = fecha.getFullYear()
    
    imagenDia(numeroDia)
    obtenerSaludo(hora,dia,mes,ano)
}

obtenerFecha()
