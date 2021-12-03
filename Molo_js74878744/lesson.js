const { getFullName } = require('./lib.js')
const fs = require('fs')


const arr = {
    name: "John",
    lastname: "Doe",
    age: 42
}

getFullName(arr)

fs.writeFile('./person.json', JSON.stringify(arr), () => {

});

// 1 способ
// контекст исполнения(this)
// function f(){
//     console.log(this);
// }
// f();

// 2 способ
// const x = {
//     name: "John",
//     lastname: "Doe",
//     age: 42
//     f: f
// }

// x.f()

// 3 способ
// function Person(name, lastname){
//     this.name = name,
//     this.lastname = lastname,
//     this.age - 2021 - date
// }

// const p1 = new Person('John', 'Doe', 1982);
// const p2 = new Person('Jane', 'Doe', 1996);

// console.loge(p1);
// console.loge(p2);

// let x = {

// }

// x.length;

// x:_proto_

