const number = [5, 10, 15, 20, 25];
function operator(opereator) {
    let add = 0;
    let average = 0;

    // Add Formula
    if (opereator === "add") {
        for (let i = 0; i < number.length; i++) {
            add = add + number[i];
        }
        return add;
    }

    // Average Formula
    if (opereator === "average") {
        for (let i = 0; i < number.length; i++) {
            add = add + number[i];
        }
        return add / number.length;
    }

    // Minium Formula
    if (opereator === "minium") {
        let minium = number[0];
        for (let i = 0; i < number.length; i++) {
            if (number[i] < minium) minium = number[i];
        }
        return minium;
        // This is for Math Function = return Math.min(...number);
    }

    // Maxium Formula
    if (opereator === "maxinum") {
        let maxium = number[0];
        for (let i = 0; i < number.length; i++) {
            if (number[i] > maxium) maxium = number[i];
        }
        return maxium;
        // This is for Math Function = return Math.max(...number);
    }

    // Range Formula
    if(opereator === "range"){
        let max = Math.max(...number);
        let min = Math.min(...number);
        let range = max - min;
        return range;
    }
}

console.log(operator("add"));
console.log(operator("average"));
console.log(operator("minium"));
console.log(operator("maxinum"));
console.log(operator("range"));
