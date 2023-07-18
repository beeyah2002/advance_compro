const book = {
    isAvailable :false,
    checkin: function(){
        this.isAvailable= true;
        return this ;
    }
};

console.log(book.checkin());
function checkin(){
    return this;
}
console.log(checkin());