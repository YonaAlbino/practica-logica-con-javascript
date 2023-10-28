var matriz = [];
var filas = 5;
var columna = 11;
var valorMaximo = 0;
var sucursal = 0;
var mes = 0;

var matriz = new Array(filas);
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (let i = 0; i < 6; i++) {
    matriz[i] = new Array(columna);
}


for (var i = 0; i < 6; i++) {

    for (var j = 0; j < 12; j++) {
        matriz[i][j] = Number(prompt("Ingrese un valor para la sucursal " + i + " "+ "En el mes de: " + meses[j]));

        if(comprobarMaximo(valorMaximo, matriz[i][j])){
            valorMaximo = matriz[i][j];
            sucursal = i;
            mes = j;
        }
    }

}

document.write("El valor máximo hayado fue de: " + valorMaximo + " se encotro en la sucursal: " + sucursal + " en el mes " + meses[mes]);

function comprobarMaximo(valorMaximo, importeVenta){

    if(valorMaximo < importeVenta){
        return true;
    }

}

