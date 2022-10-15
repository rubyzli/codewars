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
    let newParagraph = document.createElement("p");
    let newContent = document.createTextNode("Your BMI is: " + bmi);
    newParagraph.appendChild(newContent);

    let container = document.querySelector(".container-bmi");
    container.appendChild(newParagraph);
}

buttonSubmit.addEventListener("click", function addElement() {
    
    let heightValue = heightCm.value;
    let weightValue = weightKg.value;
    
    if (heightValue === "0" || weightValue === "0" || heightValue === "" || weightValue === "" ) {
        alert("Please enter your height and weight");
    } else {
        createBMI(getBMI(heightValue, weightValue));
    }
});