const sentence = document.querySelector("#sentence");
const char = document.querySelector("#specialCharacter");
const subButton = document.querySelector("#submit"); 

function removeLetters(sentence, char) {
    let arr = [];

    for(let i = 0; i<sentence.length; i++){
        
        arr.push(sentence[i]);
    }
    
    for(let j = arr.length-1; j>=0; j--){

        if(arr[j] === char){
            arr.splice(j, 1);
        }
    }
     let newArr = arr.join(' ');
     document.querySelector('#answer').innerText = newArr    
};

subButton.addEventListener("click", function(){
    let sentVal = sentence.value;
    let charVal = char.value;
    removeLetters(sentVal, charVal);
});





