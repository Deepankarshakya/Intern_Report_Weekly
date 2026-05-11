function table(num){
    for (let i = 0; i<=num; i++){
        console.log(`--------Table of  ${i}----------`);
        for(let j = 1; j<=10; j++){
            let result = i * j;
            console.log(`${i} * ${j} = ${result}`)
        }
        console.log("\n");
    }
}
table(6);