function removeDups(args){
    let lst = [];
    for ( let i of args)
    if ( lst.includes(i)){
        continue
    }else{
        lst.push(i)
    }
    console.log(lst);


}

removeDups([1,0,1,0])
removeDups(["The", "big", "cat"])
removeDups(["John", "taylor", "John"])
