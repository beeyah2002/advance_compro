function numsplit(num) {
    let count = num / 2 ;  // 5
    let count2 = num % 2; // 0
    let keep = [] ;
    if ( count2 == 0 ) {
        keep.push(count,count)

    }else {
        if (count < count2 ) {
            keep.push(count,count2)
        }else{
            if (count > count2 ) {
                let change = parseInt(count) 
                keep.push(change, count2 + change)
            }else{
                if (count < count2 ) {
                    let change = parseInt(count) 
                    keep.push( count2 + change ,change)
                }
            }
    }
    console.log(keep);
}
}
numsplit(10)