function frequencySort(string){
    let keep = [];
    let keep2 = [];
    for (let i of string) {
        if (keep.includes(i) ) {
            keep2.push(i)
            keep.pop(i)
            keep2.push(i)
        }else{
            keep.push(i)
        }
        console.log(keep,keep2);
    }
    // console.log(keep2.concat(keep).join(""));
}
frequencySort("cccaaa")