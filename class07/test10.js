function isValidIP(num){
    let lst = [];
    for (let i of num) {
        if (i = parseInt(i)){
            lst.push(i.toString())
        }

    }
    const count = lst.length;
    if (count == 4){
        console.log(true);
    }else{
        console.log(false);
    }
    //console.log(lst);
    
}
isValidIP("1.2.3.4")
isValidIP("1.2.3.")