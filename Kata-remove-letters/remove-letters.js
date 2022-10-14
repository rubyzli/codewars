const inputSentenceEl = document.querySelector("#sentence");
const inputCharEl = document.querySelector("#specialCharacter");
const subButton = document.querySelector("#submit"); 

function removeLetters(sentence, char) {
    let sentenceChars = sentence.split("");
    
    for(let i = sentenceChars.length-1; i>=0; i--){
        if(sentenceChars[i] === char){
            sentenceChars.splice(i, 1);
        }
    }

    let result = sentenceChars.join(' ');
    document.querySelector('#answer').innerText = result;
};

subButton.addEventListener("click", function(){
    let sentVal = sentence.value;
    let charVal = inputCharEl.value;
    removeLetters(sentVal, charVal);
});





