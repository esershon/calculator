//Backend logic:
var subtract = function(number1, number2) {
  return number1 - number2;
};

var add = function(number1, number2) {
  return number1 + number2;
};


//Front-end logic:
$(document).ready(function() {

  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
    //
    // var number1 = parseInt($("#add1").val());
    // var number2 = parseInt($("#add2").val());
    // var result = subtract(number1, number2);
    // alert(result);
  });
});









// var multiply= function(number1, number2) {
//   return number1 * number2;
// };

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = multiply(number1, number2);
// alert(result);
//
// var divide = function(number1, number2) {
//   return number1 / number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = divide(number1, number2);
// alert(result);
//
//
// //BMI: Multiply the weight in pounds by 0.45 (the metric conversion factor)
//
// var userWeight = parseInt(prompt ("How much do you weigh in lbs?"));
// var userHeight = parseInt(prompt ("How tall are you in inches?"));
// var userBMI = function (height, weight){return ((weight*703)/(height*height))}
//
// alert ("Your BMI is " + userBMI(userHeight, userWeight).toFixed() + ".");
//
//
// //F to C: The temperature T in degrees Fahrenheit (°F) is equal to the temperature T in degrees Celsius (°C) times 9/5 plus 32:
// performFToC = confirm ("Would you like to convert from Fahrenheit to Celcius?");
// tempInF = parseInt(prompt ("What is the temperature in Fahrenheit?"));
// var FToC = function(tempInF) {return (tempInF-32)*5/9};
// if (performFToC=true){
//   alert ("The temperature in Celcius is " + FToC(tempInF).toFixed(1) + ".")
// }
//
// performCToF = confirm ("Would you like to convert from Celcius to Fahrenheit?")
// tempInC = parseInt(prompt ("What is the temperature in Celcius?"))
// var CToF = function(tempInC) {return tempInC*9/5+32};
// if (performCToF=true){
//   alert ("The temperature in Fahrenheit is " + CToF(tempInC).toFixed(1) + ".")
// }
