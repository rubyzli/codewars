let heightCm = document.querySelector("#heightBMI");
let weightKg = document.querySelector("#weightBMI");

let heightValue = heightCm.value;
let weightValue = weightKg.value;

const buttonSubmit = document.querySelector(".buttonBMI");

buttonSubmit.addEventListener("click", function addElement(weight, height) {
    if (heightValue === 0 && weightValue === 0) {
        alert("Please enter your height and weight");
    } else {
        let index = weight / (height * height);
        if (index <= 18.5) {
            return "Underweight";
        } else if (index <= 25) {
            return "Normal";
        } else if (index <= 30) {
            return "Overweight";
        } else if (index > 30) {
            return "Obese";
        }
    
        // create a new div element
        const newParagraph = document.createElement("p");
        
        // and give it some content
        const newContent = document.createTextNode("Your BMI is:");
        
        // add the text node to the newly created div
        newParagraph.appendChild(newContent);
        
        // add the newly created element and its content into the DOM
        const currentParagraph = document.getElementById("p2");
    
        document.body.insertBefore(newParagraph, currentParagraph);
            
        document.body.onload = addElement;
    }
});

console.log(heightCm);
console.log(heightValue);