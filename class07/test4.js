function totalVolume(...args) {
    let count = []
    cal = 1;
    plus = 0
    for ( let index = 0 ; index< args.length; index ++ ) {
        for ( let j of args[index]){
            cal *= j ;
            //console.log(cal);
        }
        plus += cal;
        cal = 1;
    }
    console.log(plus);
}
totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1])

// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
//   }
  
//   let x = sum(4, 9, 16, 25, 29, 100, 66, 77);