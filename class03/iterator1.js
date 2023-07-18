let str = "hello";

let iterator = str[Symbol.iterator]();

while (true){
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}

for (let char of "test"){
    console.log(char);
}

let str1 = "hello beeyah";

let itarator1 = str1[Symbol.iterator]();

while (true){
    let result = itarator1.next();
    if (result.done) break;
    console.log(result.value);
}