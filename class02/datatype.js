const poeple = ["Aaron" , "Mell", "John"];
const one = 1;
const str = "Hello World";
const b = true;
const employee = {
    firstname: "Teeraporn",
    lastname: "Petchrote",
};

function sayHello(person) {
    console.log("Hello " + person.firstname +" "+ person.lastname);

}

console.log(typeof poeple);
console.log(typeof sayHello);
console.log(employee instanceof Array);
sayHello(employee);