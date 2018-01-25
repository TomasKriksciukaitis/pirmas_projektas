console.log("Labas");

var list = [];
var worker1 = {},
    worker2 = {},
    worker3 = {};

worker1 = {
  name: "Jurate",
  lname: "Petrauskiene",
  gimimo: 1988,
  age: 23,
};

worker2 = {
  name: "Remigijus",
  lname: "Ruslanaicius",
  gimimo: 1958,
  age: 53,
};

worker3 = {
  name: "Ona",
  lname: "Mursaite",
  gimimo: 1986,
  age: 30,
};

console.log(worker1,worker2, worker3);

list.push(worker1);
list.push(worker2);
list.push(worker3);
console.log(list);

// UZDUOTIS:

// A pakeisti Remigijaus amziu i 26

worker2.age = "26";
console.log(list);

// arba galima aprasyti list[1].age = "26";

// B pakeisti Onos varda i Janina

worker3.name = "Janina";
console.log(list);

// atspausdinam vardus su FOR:

for (var i = 0; i < list.length; i++) {
  console.log(list[i].name);
  console.log(list[i].lname);
  console.log(list[i].gimimo);
  console.log(list[i].age);
  console.log("===============");
}
