function loop() {
    for (let i = 1; i < 31; i++) {
        if (i % 3 === 0) {
            console.log("Fizz");
        }
        if (i%5 === 0){
            console.log("Fizzbuzz");
        }
        else
        console.log(i);
    }
}
loop();