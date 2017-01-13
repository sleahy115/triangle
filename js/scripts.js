$(document).ready(function(){
  $("#numbers form").submit(function(event) {
    var number1Input = $("input#side1").val();
    var number2Input = $("input#side2").val();
    var number3Input = $("input#side3").val();

    if (number1Input === number2Input && number2Input === number3Input) {
    $("#equilateral").show();
    }
    else if (number1Input === number2Input || number1Input === number3Input || number2Input === number3Input){
    $("#isosceles").show();
    }
    else if (number1Input !== number2Input || number3Input ){
    $("#scalene").show();
    }

    event.preventDefault();
  });
});
