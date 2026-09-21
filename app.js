const button = document.getElementById("calcButton");
const proteinInput = document.getElementById("proteinInput");
const proteinResult = document.getElementById("proteinResult");
const fatInput = document.getElementById("fatInput");
const fatResult = document.getElementById("fatResult");
const carbInput = document.getElementById("carbInput");
const carbResult = document.getElementById("carbResult");
const caloriesResult = document.getElementById("caloriesResult");

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
