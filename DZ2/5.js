function mathAction(arg1, arg2, mathAction){
    switch (mathAction){
        case "plus":
            result = (arg1 + arg2);
            break;
        case "minus":
            result = (arg1 - arg2);
            break;
        case "mult":
            result = (arg1 * arg2);
            break;
        case "division":
            result = (arg1 / arg2);
            break;
        default:
            alert("только plus/minus/mult/division");
    }

    return result;
}

a = mathAction(10, 5, "division");
console.log(a);