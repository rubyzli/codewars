//******************************************* Kata Word Score *******************************************
function high(x) {
    //   let x = "hey hello hola";
    let abc = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    ];
    
    // split your string after every " "
    
    const words = x.split(" ");
    
    // create empty obj
    
    const alphabetMap = {};
    
    for (let i = "a".charCodeAt(), j = 1; i <= "z".charCodeAt(); i++, j++) {
        alphabetMap[i] = j;
    }
    /**
     you can check the charCodeAt = value of variable 
     alphabetMap[i = 97 ] = j = 1;
     console.log(alphabetMap);
     */
    
    let highestScoringWord = { word: "", score: 0 };
    console.log(words);
    words.forEach((w) => {
        const chars = w.split("");
        console.log(w);
        const sumOfChars = chars.reduce(function (count, char) {
            console.log(count, char, char.charCodeAt());
            return count + alphabetMap[char.charCodeAt()];
        }, 0);
        
        if (sumOfChars > highestScoringWord.score) {
            highestScoringWord = { word: w, score: sumOfChars };
        }
    });
    return highestScoringWord.word;
}

//******************************************* Kata function  *******************************************
function multiply(a, b){
    return a * b;
}

//******************************************* Kata function  *******************************************
