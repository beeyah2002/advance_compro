function highestDigit(num) {
    let string1 = num.toString()
    //console.log(string1);
    let compa = []
    for (let i of string1) {
        let change = parseInt(i) 
        compa.push(change);  
    }
    console.log(Math.max(...compa));
}

highestDigit(377401)