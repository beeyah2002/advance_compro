var name = "Fatema";
function fun() {
    console.log(this.name);

}

const user = {
    name: "Marium",
    yearofbirth : 1999,
    calcAge : function() {
        const currentyear = (new Date()).getFullYear();
        return currentyear - this.yearofbirth;
    }
}
fun();
user.calcAge();
fun.call(user);