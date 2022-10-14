let heightCm = document.querySelector("#heightBMI");
let weightKg = document.querySelector("#weightBMI");
let buttonSubmit = document.querySelector(".buttonBMI");

function getBMI(heightValue, weightValue) {
    let index = weightValue / (heightValue * heightValue);
    if (index <= 18.5) {
        return "Underweight";
    } else if (index <= 25) {
        return "Normal";
    } else if (index <= 30) {
        return "Overweight";
    } else if (index > 30) {
        return "Obese";
    }
}

function createBMI(bmi) {
    // create a new div element
    const newParagraph = document.createElement("p");
    
    // and give it some content
    const newContent = document.createTextNode("Your BMI is: " + bmi);
    
    // add the text node to the newly created div
    newParagraph.appendChild(newContent);
    
    // add the newly created element and its content into the DOM
    const currentParagraph = document.getElementById("p2");
    
    document.body.insertBefore(newParagraph, currentParagraph);
}

buttonSubmit.addEventListener("click", function addElement() {
    
    let heightValue = heightCm.value;
    let weightValue = weightKg.value;
    
    if (heightValue === "0" || weightValue === "0" || heightValue === "" || weightValue === "" ) {
        alert("Please enter your height and weight");
    } else {
        document.body.onload = createBMI(getBMI(heightValue, weightValue));
    }
});