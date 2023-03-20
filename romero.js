let num=0;
let notas=0;
let prom=0;
let c=1;
notas=parseInt(prompt("¿cuantas notas se ingresaran?"))
while (c<=notas){
    num=parseInt(prompt("ingrese nota"))
    if (num>1 && num<=10) {
    prom=prom+num
    c++
    }
    else {
        alert("la nota ingresada no es valida")
    }
}
prom=(prom/notas)
if (prom>=7) {
    document.write("aprobado con "+prom);
}
else {
    document.write("desaprobado con "+prom);
}
 