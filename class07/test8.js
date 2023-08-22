function simplePair(num1, num2) {
    keep = [];
    // console.log(num1[0]);
    if (( num1[0] * num1[1] ) == num2) {
        keep.push(num1[0],num1[1])
        console.log(keep);
        // console.log(Math.min(keep));
    }else if (( num1[0] * num1[2] ) == num2){
        keep.push(num1[0],num1[2])
        console.log(keep);
    }else if (( num1[1] * num1[2] ) == num2){
        keep.push(num1[1],num1[2])
        console.log(keep);
    }else{
        console.log(null);
    }
    

}
simplePair([1,2,3],6)