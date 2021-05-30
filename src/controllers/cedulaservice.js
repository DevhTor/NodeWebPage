const { json } = require("express");

exports.validar = (req, res) => {

    try {
        const { cedula } = req.body;
        const l_multiplicadores = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
        var result = 0;

        for (i = 0; i < 10; i++) {
            mult = cedula[i] * l_multiplicadores[i];
            if (mult >= 10) {
                result += parseFloat(
                    mult
                        .toString()
                        .split("")
                        .map((x) => parseInt(x))
                        .reduce((acumulador, valorActual) => acumulador + valorActual)
                );
            } else {
                result += parseFloat(mult);
            }
        }
            temp = parseInt(result.toString().split("")[0] + "0");
            if (temp < result) {
                result = temp + 10 - result;
            }

            if (cedula[10] == result) {
                var respuesta = '{"respuesta": Cedula Correcta}';
            } else {
                var respuesta = '{"respuesta": Cedula Incorrecta}';
            }

            console.log(cedula);
            return res.status(400).render('partials/cedulaservice', {
                logged: true, 
                respuesta: respuesta,
                
            });
    } catch (error) {

    }
        
}


            


// window.addEventListener("load", function () {
//     cedula.addEventListener("keypress", soloNumeros, false);
//   });

//   //Solo permite introducir numeros.
//   function soloNumeros(e) {
//     var key = window.event ? e.which : e.keyCode;
//     if (key < 48 || key > 57) {
//       e.preventDefault();
//     }
//   }

//   function validar(p_cedula) {
//     //obtener Campo Cedula
//     p_cedula = document.getElementById("cedula").value.split("");

//     l_multiplicadores = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
//     var result = 0;

//     for (i = 0; i < 10; i++) {
//       mult = p_cedula[i] * l_multiplicadores[i];
//       if (mult >= 10) {
//         result += parseFloat(
//           mult
//             .toString()
//             .split("")
//             .map((x) => parseInt(x))
//             .reduce((acumulador, valorActual) => acumulador + valorActual)
//         );
//       } else {
//         result += parseFloat(mult);
//       }
//     }
//     temp = parseInt(result.toString().split("")[0] + "0");
//     if (temp < result) {
//       result = temp + 10 - result;
//     }

//     if (p_cedula[10] == result) {
//       document.getElementById("result").innerHTML =
//         "<p> Cedula Correcta </p>";
//     } else {
//       document.getElementById("result").innerHTML =
//         "<p> Cedula Incorrecta </p>";
//     }
//   }