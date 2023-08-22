function sumTwosmallestnum(a) {
    // console.log(a);
    let lst = [];
    let min = Math.min(a)
    lst.push(min)
    console.log(min);
    a.splice(min)
    console.log(a);
    for (let i of lst ){

    }

}
sumTwosmallestnum([19,5,42,2,77])




// const numericArray = [10, 5, 8, 1, 3];


// numericArray.sort(function(a, b) {
//   return a - b; // Compare function for numeric sorting
// });

// console.log(numericArray); // Output: [1, 3, 5, 8, 10]