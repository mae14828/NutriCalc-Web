const button = document.getElementById("calcButton");
const proteinInput = document.getElementById("proteinInput");
const fatInput = document.getElementById("fatInput");
const carbInput = document.getElementById("carbInput");

const proteinResult = document.getElementById("proteinResult");
const fatResult = document.getElementById("fatResult");
const carbResult = document.getElementById("carbResult");
const caloriesResult = document.getElementById("caloriesResult");

let totalProtein = 0;
let totalFat = 0;
let totalCarb = 0;
let totalCalories = 0;

button.addEventListener("click",function(){
    let protein = Number(proteinInput.value);
    let fat = Number(fatInput.value);
    let carb = Number(carbInput.value);
    if (protein < 0 || proteinInput.value === ""){
        alert("0以上の数値を入力してください。");
        return;
    }
    let calories = protein *4 + fat *9 + carb *4;
    proteinResult.textContent = protein;
    fatResult.textContent = fat;
    carbResult.textContent = carb;
    caloriesResult.textContent = calories;
})
