//******************************************* Kata Word Score *******************************************
function high(x) {
  const words = x.split(" ");

  const alphabetMap = {};

  for (let i = "a".charCodeAt(), j = 1; i <= "z".charCodeAt(); i++, j++) {
    alphabetMap[i] = j;
  }

  let highestScoringWord = { word: "", score: 0 };
  words.forEach((w) => {
    const chars = w.split("");
    const sumOfChars = chars.reduce(function (count, char) {
      return count + alphabetMap[char.charCodeAt()];
    }, 0);

    if (sumOfChars > highestScoringWord.score) {
      highestScoringWord = { word: w, score: sumOfChars };
    }
  });
  return highestScoringWord.word;
}

//******************************************* Kata function  *******************************************
function multiply(a, b) {
  return a * b;
}

//******************************************* Kata function  *******************************************

function uniqueInOrder(it) {
  var result = [];
  var last;

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push((last = it[i]));
    }
  }

  return result;
}

//******************************************* Kata function  *******************************************

function areYouPlayingBanjo(name) {
  // Implement me

  if (name[0] == "R" || name[0] == "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
console.log(areYouPlayingBanjo("bravo"));
areYouPlayingBanjo("bravo");

//******************************************* Kata function  *******************************************

function stringToArray(string) {
  let s = string.split(" ");
  return s;
}

//******************************************* Kata exclamation mark  *******************************************

let s = '!Hello World!';
function removeExclamationMarks(s) {
    let arr = [];
    
    for(let i = 0; i<s.length; i++){
        arr.push(s[i]);
    }
        for(let j = arr.length-1; j>=0; j--){
            if(arr[j] === '!'){
                arr.splice(j, 1);
                console.log(arr)
            }
        }
        return arr.join('');
    }
    
    console.log(removeExclamationMarks(s));
    
//******************************************* Kata invert  *******************************************

let array = [1, 6, -10, 8]
function invert(array) {
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(array[i]>=0){
            newArr.push(array[i]*-1)
        } else {
            newArr.push(array[i]*-1)
        }
    }
    return newArr;
 }

console.log(invert(array));
 
//******************************************* Kata Calculate BMI *******************************************

function bmi(weight, height) {
  let index = weight / (height*height)

  if(index <= 18.5){
  return "Underweight";
} else if(index <=25){
  return "Normal";
}else if(index <=30){
  return "Overweight";
}else if(index > 30){
  return "Obese";
}
  }