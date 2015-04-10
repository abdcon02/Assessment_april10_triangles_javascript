function makeTriangle(a,b,c){
  var desc_number_array = [a,b,c].sort(function(x,y) {
    return y-x;
  });
  console.log(desc_number_array);
  console.log(desc_number_array[0] >= (desc_number_array[1] + desc_number_array[2]));
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
