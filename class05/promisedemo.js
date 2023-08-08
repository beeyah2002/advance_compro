function promisTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

promisTimeout(2000)
    .then(() => {
        console.log("Done");
        return promisTimeout(1000);
    })
    .then(() => {
        console.log("Also done");
        return Promise,resolve(42);
    })
    .then((result) => {
        console.log(result);
    })
    .catch(() => {
        console.log("Error");
    })