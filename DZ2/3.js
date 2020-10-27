let a = -2;
let b = 3;

result = '';

if(a >= 0 && b >= 0){
    result = a - b;
    console.log(result);
}
if(a < 0 && b < 0){
    result = a * b;
    console.log(result);
}

if( a < 0 && b > 0 || b < 0 && a > 0){
    result = a + b;
    console.log(result);
}
