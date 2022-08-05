// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function S1(a,b) {
    return a*b;
}
let Srectangle = S1(3,2);
console.log(`Площа прямокутника = ${Srectangle}`);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function S2(r) {
 return 3.14 *Math.pow(r,2);
}
let Sround = S2(7);
console.log(`Площа круга = ${Sround}`);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function S3(r,h) {
    return 2*3.14*r*h;
}
let Stopper = S3(3,4);
console.log(`Площа циліндра = ${Stopper}`);

// - створити функцію яка приймає масив та виводить кожен його елемент
let Mas=[23,true,false,'hello','okten'];
function Array(array) {
    for(let i=0;i<array.length;i++){
     }
    return array;
}
console.log(Array(Mas));
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function p(paragraph) {
    document.write(`<p>${paragraph}</p>`);
}
p("Hello okten");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ListItem1(li1) {
    document.write(
         `<ul>
 <li>${li1}</li>
 <li>${li1}</li>
 <li>${li1}</li>
 </ul>`)
}
 ListItem1("HELLO");


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ListItem(li,amountLi) {
    document.write(`<ul>`)
    for(let i=0;i<`${amountLi}`;i++){
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`)
}
ListItem("Click me",9);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let Mas2=['functions','is','heavy','topic',true,false,5,8,2022];
function Array2(arr2) {
    document.write(`<ul>`)
    for(const item of arr2){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
Array2(Mas2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let Mas3=[
    {
        id:"gnom74",
        name:"Taras",
        age:22
    },
    {
        id:"BigShark_01",
        name:"Igor",
        age:24
    },
    {
        id:"Artmoney",
        name:"Vlad",
        age:25
    }
]
function Array3(arr3) {
    for(const variable of arr3){
        document.write(`<div style="margin-bottom: 50px; margin-top: 30px;">`)
        for(const variable2 in variable){
            document.write(`<p>${variable2}: ${variable[variable2]}</p>`)
        }
        document.write(`</div>`)
    }
}
Array3(Mas3);




// - створити функцію яка повертає найменьше число з масиву
Mas4=[87,45,66,32,9,37,101];
const MimNumber = (arr)=> {
    let min = arr[0];
    for (const MinNum of arr) {
        if (MinNum < min)
            min = MinNum;
    }
    return min;
};
const Min = MimNumber(Mas4);
console.log(Min);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const SumElementsMas = (array)=> {
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
}
const summary=SumElementsMas(Mas4);
console.log(summary);

