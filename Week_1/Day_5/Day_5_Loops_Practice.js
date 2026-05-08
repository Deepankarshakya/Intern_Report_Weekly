// For loop
function forloop() {
    for (let i = 1; i < 5; i++) {
        console.log(i);
    }
}
forloop();

// While Loop
function whileloop(){
    let i = 0;
    while(i<5){
        console.log(i);
        i++;
    }
}
whileloop();

//Loop with Break
function loopwithbreak(){
    for(let i = 1; i<=5; i++){
        if(i === 3) break;
        console.log(i);
    }
}
loopwithbreak();

// Loop with continue (Which technically skips number)
function loopwithcontinue(){
    for(let i = 0; i < 9; i++){
        if(i === 4) continue;
        console.log(i);
    }
}
loopwithcontinue();