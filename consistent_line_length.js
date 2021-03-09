function consistentLineLength(filename, length){
    /* Reads a given text file and returns a reformatted list of lines(strings), each filled up to the length inputted, without splitting words.
    * Does not account for words longer than the given length.
    * Only positive integers are valid length inputs.
    * Output is a list of strings.
    
    * Code uses .substr() and .lastIndexOf() methods on strings
    * Methods referenced from MDN
    * Accessed 17-12-20
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
    */

    // source file read, text returned as a single-spaced string
    const fs = require ("fs");
    const data = fs.readFileSync(filename,"utf8"); 
    let sourceText = data.split("\n").join(" ");

    let finalText = [];
    let charCount = 0;

    /* To generate consecutive lines, each iteration starts with the max possible line length.
     Position of the last possible whitespace is located and maximum filled substrings generated. 
    */
    while(charCount < sourceText.length){
        let currentLine = sourceText.substr(charCount, length + 1);
        let lastIndex = currentLine.lastIndexOf(" ")
        actualLine = currentLine.substr(0, lastIndex);
        finalText.push(actualLine);
        // as LastIndex is a whitespace, next count begins after incrementing 1
        charCount += lastIndex + 1; 
                
    }
    return finalText;
}