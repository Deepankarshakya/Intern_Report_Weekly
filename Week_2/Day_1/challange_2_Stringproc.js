function sentence(text){
    const cleantext =  text.toLowerCase().trim();
    const word = cleantext.split(" ").filter(w => w!=="");
    const wordCount = word.length;

    const charCount = text.replace(/\s/g, "").length;

    const uniqueCharacter = [...new Set(cleantext.replace(/\s/g, ""))].length;
    
    const reverse = text.split("").reverse().join("");

    const isPalindrome = cleantext.replace(/\s/g, "") === reverse.replace(/\s/g, "");
    
    const reverseWords = text.split("").reverse().join("");

    return {
        wordCount,
        charCount,
        uniqueCharacter,
        isPalindrome,
        reverseWords
    };
}

console.log(sentence("Hello World"));
console.log(sentence("raone"));