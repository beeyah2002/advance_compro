function getBudjets(obje) {
    count = 0
    for (let i of obje) {
        count += i.budget
    }
    console.log(count);

}
getBudjets([
    {name: "John", age: 21, budget : 23000},
    {name: "steve", age: 32, budget : 40000},
    {name: "Martin", age: 16, budget : 2700},
])