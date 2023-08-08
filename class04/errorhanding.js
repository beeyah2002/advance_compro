function criticalcode () {
    throw "throwing an exception";
}

function logError(theException) {
    console.log(theException);
}

console.log("\n************Try..Catch***************\n");

try{
    criticalcode();

} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

console.log("\n**********Throwing in Try.. catch*************\n");

try {
    throw"An exception that is throw every time";
} catch (ex){
    console.log("Got an error");
    logError(ex);
}

console.log("\n***********Tyr.. Catch...Finally*******\n");

try{
    //criticalcode();
    }catch (ex) {
        console.log("Got an error");
        logError(ex);
    }finally  {
        console.log("Code that always will run");
    }

function hello(){
    console.log(console.log("\n************Throwing Eceptions**********\n"));
}