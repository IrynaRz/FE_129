//задание 2
let a1 = 5%3;
console.log(a1);
console.log(a1, typeof a1);
let a2 = 3%5;
console.log(a2);
console.log(a2, typeof a2);
let a3 = 5 + '3';
console.log(a3);
console.log(a3, typeof a3);
let a4 = '5'- 3;
console.log(a4);
console.log(a4, typeof a4);
let a5 = 75 + 'кг';
console.log(a5);
console.log(a5, typeof a5);
let a6 = 785 * 653;
console.log(a6);
console.log(a6, typeof a6);
let a7 = 100/25;
console.log(a7);
console.log(a7, typeof a7);
let a8 = 0 * 0;
console.log(a8);
console.log(a8, typeof a8);
let a9 = 0/2;
console.log(a9);
console.log(a9, typeof a9);
let a10 = 89/0;
console.log(a10);
console.log(a10, typeof a10);
let a11 = 98 + 2;
console.log(a11);
console.log(a11, typeof a1);
let a12 = 5 - 98;
console.log(a12);
console.log(a12, typeof a12);
let a13 = (8 + 56 * 4)/5;
console.log(a13);
console.log(a13, typeof a13);
let a14 = (9-12)*7/(5+2);
console.log(a14);
console.log(a14, typeof a14);
let a15 = +"123";
console.log(a15);
console.log(a15, typeof a15);
let a16 = 1||0;
console.log(a16);
console.log(a16, typeof a16);
let a17 = false||false;
console.log(a17);
console.log(a17, typeof a17);
let a18 = true > 0
console.log(a18);
console.log(a18, typeof a18);
console.log('');


//задание 8 a=c=8 (переменная а была объявлена ранее);
let c = 8;
    b = 3;
{
    let x = (16 - c)/2 + b;
    console.log(x);
    console.log(c + 2 * (x - b));
}

{
    //bx + 15b = c + 6x;
    //bx - 6x = c - 15b;
    //x(b - 6) = c - 15b;
    //x = (c - b15)/(b - 6);
    let x = (c - b * 15)/(b - 6);
    console.log(x);
    console.log(b * (x + 15) === c + 6 * x);
}

{
    let x = 23780/(3 + c + b);
    console.log(x);
    console.log(x + 2 * x + c * x + b * x);
}