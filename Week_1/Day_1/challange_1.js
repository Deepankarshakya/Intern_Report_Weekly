const name = "Deepankar Shakya";
const age = 24;
const place = "Lalitpur-6, Thapahity";
const degree = "I have finished my blachelor in BCA";
const extra = "I have completed N4 and N5 level of Japanese Language, and I have my N5 degree of JLPT";
const hobby = "My hobby was to play Games."

function myDetail(){
    let me = `My name is ${name}, I am ${age} years old. I live in ${place}. ${degree} ${extra}. ${hobby}`;
    return me;
}
console.log(myDetail());