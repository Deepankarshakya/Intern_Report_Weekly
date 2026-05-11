const number = [5, 10, 15, 20, 25];
function operator(opereator){
    let add = 0;
    let average = 0
    if(opereator === "add"){
        for(let i = 0; i<number.length; i++){
            add = add + number[i];
        }
       return add; 
    }
    if (operator === "average"){
        for(let i = 0; i<number.length; i++){
            add = add + number[i];
    }
        return add/number.length;
    }
}
console.log(operator("average"));