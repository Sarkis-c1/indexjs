function reverse(string) {
    return Array.from(string).reverse().join("");
}


//Defines a PHrase object
function Phrase(content) {
    this.content = content;
}

this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
}