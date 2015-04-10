function makeTriangle(a,b,c){

  // Put everything in an array to sort by value
  var desc_number_array = [a,b,c].sort(function(x,y) {
    return y-x;
  });

  // Check for types of triangles
  if (desc_number_array[0] >= desc_number_array[1] + desc_number_array[2]){
    return "This is not a triangle";
  } else if(a === b && b === c && c === a){
    return 'equilateral';
  } else if(a === b || b === c || c === a ){
    return 'isosceles';
  } else {
    return 'scalene';
    };
}

$(document).ready(function() {
  $("form#triangle-input").submit(function(event) {
    var a = parseInt($("#a-side").val());
    var b = parseInt($("#b-side").val());
    var c = parseInt($("#c-side").val());

    var result = makeTriangle(a,b,c);
    console.log(result);
    debugger;
    $("#triangle-output").text(result);
    $("#return").show();

    event.preventDefault();
  });
});
