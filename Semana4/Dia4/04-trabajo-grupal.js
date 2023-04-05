

function callMenu() {
    let nro_ejercicio = parseInt(prompt("ingrese el ejercicio que desea ejecutar"))
    let ejer = nro_ejercicio


    if (ejer === 1) {
        let primerNumero = prompt("Ingresar el primer numero: ");
        let segundoNumero = prompt("Ingresar el segundo numero: ");
        let sumar = +primerNumero + +segundoNumero
        let suma = document.getElementById('resultado')
        suma.textContent = 'la suma es: ' + sumar



    } else if (ejer === 2) {
        let nt1 = prompt("Ingresar la 1ra nota: ");
        let nt2 = prompt("Ingresar la 2da nota: ");
        let nt3 = prompt("Ingresar la 3ra nota: ");
        let nt4 = prompt("Ingresar la 4ta nota: ");
        let promedio = (+nt1 + +nt2 + +nt3 + +nt4) / 4;
        let prom = document.getElementById('resultado')
        prom.textContent = 'El promedio es: ' + promedio



    } else if (ejer === 3) {
        let base3 = prompt("Ingresar la base del rectángulo: ");
        let altura3 = prompt("ingresar la altura del rectángulo: ");
        console.log("El área del rectángulo es : ", base3 * altura3);



    } else if (ejer === 4) {
        let base4 = prompt("Ingresar la base del triángulo: ");
        let altura4 = prompt("ingresar la altura del triángulo: ");
        console.log("El área del triángulo es : ", (base4 * altura4) / 2);



    } else if (ejer === 5) {
        let radio = prompt("Ingresar el radio del círculo: ");
        console.log("el area del círculo es: ", Math.PI * radio ** 2);



    } else if (ejer === 6) {
        const ejer6 = (horasTrabajadas, salarioHombre) => {
            return horasTrabajadas * salarioHombre
        }
        let var1 = prompt("Ingresar las horas trabajadas esta semana: ");
        let var2 = prompt("ingresar el salario por hora: ");
        resultado.textContent = "tu salario esta semana es de " + ejer6(var1, var2)



    } else if (ejer === 7) {
        const ejer7 = (metrosTela) => {
            return metrosTela * (1 / 0.0254)
        }
        let var1 = prompt("Ingresar los metros de tela que necesita: ");
        resultado.textContent = `Si necesitas ${var1} metros de tela tendras que comprar ${ejer7(var1)} pulgadas de tela`



    } else if (ejer === 8) {
        const ejer8 = (dineroSoles) => {
            return dineroSoles * 3.78
        }
        let var1 = prompt("Ingresa cuanto dinero tienes en soles: ");
        resultado.textContent = `Si cambias ${var1} soles tendras ${ejer8(var1)} dolares`



    } else if (ejer === 9) {
        const ejer9 = (anoNacimiento) => {
            return 2023 - anoNacimiento
        }
        let var1 = prompt("Ingresa que año naciste: ");
        resultado.textContent = `Tu tienes ${ejer9(var1)} años`



    } else if (ejer === 10) {
        const persona1 = [];
        const persona2 = [];
        const persona3 = [];

        for (let i = 1; i < 4; i++) {
            let var1 = prompt("Ingresa nombre de la persona " + i);
            let var2 = prompt("Ingresa edad de la persona: " + i);
            if (i === 1) {
                persona1.push(var1);
                persona1.push(var2);
            } else if (i === 2) {
                persona2.push(var1);
                persona2.push(var2);
            } else if (i === 3) {
                persona3.push(var1);
                persona3.push(var2);
            }
        }
        if (persona1[1] < persona2[1] && persona1[1] < persona3[1]) {
            texto = `la persona con nombre ${persona1[0]} es la menor porque tiene ${persona1[1]} años`
        } else if (persona2[1] < persona3[1]) {
            texto = `la persona con nombre ${persona2[0]} es la mayor porque tiene ${persona2[1]} años`
        } else {
            texto = `la persona con nombre ${persona3[0]} es la mayor porque tiene ${persona3[1]} años`
        }
        resultado.textContent = texto


    } else if (ejer === 11) {
        let bono = 0
        const ejer11 = (antiguedad) => {

            if (+var1 === 1) {
                bono = 100
            } else if (+var1 === 2) {
                bono = 200
            } else if (+var1 === 3) {
                bono = 300
            } else if (+var1 === 4) {
                bono = 400
            } else if (+var1 === 1) {
                bono = 500
            } else if (+var1 > 5) {
                bono = 1000
            }
        }
        let var1 = prompt("Ingresa tu antiguedad en la empresa: ");
        ejer11(var1)
        resultado.textContent = `tienes un bono de s/.${bono} por tus ${var1} años de antiguedad`


    } else if (ejer === 12) {
        let porcentajeanual = 0
        let texto = ""
        const ejer12 = (salarioInicial, antiguedad) => {

            for (let i = 1; i <= antiguedad; i++) {
                porcentajeanual = salarioInicial * 0.1 * i
                salarioFinal = +salarioInicial + +porcentajeanual
                texto = `tu salario con ${i} año de antiguedad es de ${salarioFinal}////////` + texto
            }

        }
        let var1 = prompt("Ingresa tu salario inicial: ");
        let var2 = prompt("Ingresa tu antiguedad en la empresa: ");
        ejer12(var1, var2)
        resultado.textContent = `tu salario con ${var2} años de antiguedad es de ${salarioFinal} ///////   los salarios que resiviste durante estos años fueron: ` + texto


    } else if (ejer === 13) {
        // debugger
        const nroAlumnos = []
        let aprobados = 0, desaprobados = 0;
        const ejer13 = (nota) => {
            for (let i = 0; i < nota; i++) {
                nroAlumnos.push(prompt("ingrese la nota del alumno Nro " + (i + 1)));
                if (nroAlumnos[i] >= 10.5) {
                    aprobados++
                } else {
                    desaprobados++
                }
            }
        }
        let var1 = parseInt(prompt("ingrese numero de alumnos"));
        ejer13(var1)
        resultado.textContent = `en la clase de ${var1} alumnos, hay ${aprobados} alumnos aprobados y ${desaprobados} alumnos desaprobados`



    } else if (ejer === 15) {
        let text=""
        const ejer15 = (edad) => {
            if (edad >= 18) {
                texto = "si puede votar"
            } else {
                texto = "no puede votar"
            }
        }
        let var1 = parseInt(prompt("ingrese su edad"));
        ejer15(var1)
        resultado.textContent = texto

    }

}