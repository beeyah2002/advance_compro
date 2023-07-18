const obj1 = {
    person : "Teeraporn",
    weight : 50
}

const obj2 = {... obj1};
obj2.weight = 45
console.log(obj1);
console.log(obj2);