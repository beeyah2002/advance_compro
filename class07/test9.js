function digitalclock(num){
    // 1 hour = 3600 sec
    let num1 = num / 3600 ;
    let num2 = num % 3600 ;
    let num3 = num2 / 60 ;
    let num4 = num2 / 60 ;
    let change = parseInt(num1)
    let change2 = parseInt(num1)
    console.log(change,num2);
    console.log(change2,num4);
}
digitalclock(5025)