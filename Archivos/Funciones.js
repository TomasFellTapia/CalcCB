function dividir() {
var num1 = $("#val1").val();
var num2 = $("#val2").val();
if(num2!=0){
    console.log("El primer es: "+num1+" Y el segundo es: "+num2);
    var res = num1/num2;
    console.log("La divicion es: "+res);
}else{
    console.log("No se Puede dividir por 0.");
}

}
function suma(){
    var num1 = $("#val1").val();
    var num2 = $("#val2").val(); 
    console.log("El primer es: "+num1+" Y el segundo es: "+num2);
    var res = num1+num2;
    console.log("La suma es: "+res);
}