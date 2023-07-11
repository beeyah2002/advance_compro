function creatQoute(qoute, callback) {
    let myqoute = "Like I alway say, " + qoute;
    callback(myqoute); 
}

function logqoute(qoute) {
    console.log(qoute + ' Yes...');
}

creatQoute("you will getting better!", logqoute);