const rl = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

var name , weight, hieght, bmi;

rl.question('Enter your name : ', (answer) => {
    name = answer;
    rl.question('Enter your weight (in Kg.): ', (answer) => {
        weight = answer;
        rl.question('Enter your height (in m.): ', (answer) => {
            hieght = answer;
            bmi = weight / (hieght * hieght);
            console.log(`${name}, your BMI is ${bmi.toFixed(2)}`);
            rl.close();
        });
    });
}
);