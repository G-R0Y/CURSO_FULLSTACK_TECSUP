// *** date
///la clase date sirve para manipular fechas

let hoy = new Date();
console.log('hoy es', hoy);

///getFullYEar()
//// retorna el año de la variable

console.log('año', hoy.getFullYear());

///getMonth()
//// retorna el mes de la variable, pero empieza en 0 OJOOOOO

const meses=['ene','feb', 'mar','abr','may','jun','jul','ago','set','oct','nov','dic']

console.log('mes', meses[hoy.getMonth()])

//// getDate
//// retorna el numero de dia del mes

console.log(hoy.getDate())

//// getHours(),getMinutes(),getSeconds() devuelve las horas minutos y segundos

//// detDay()  retorna el numero de dia de la semana (lunes = 1, martes =2....)

const dias=['domingo','lunes','martes','miercoles','jueves','sabado']
console.log(hoy.getDay)