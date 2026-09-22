const liveCaloriesButton = document.getElementById("liveCaloriesButton");
const calcButton = document.getElementById("calcButton");
const proteinInput = document.getElementById("proteinInput");
const fatInput = document.getElementById("fatInput");
const carbInput = document.getElementById("carbInput");

const liveCalories = document.getElementById("liveCalories");
const proteinResult = document.getElementById("proteinResult");
const fatResult = document.getElementById("fatResult");
const carbResult = document.getElementById("carbResult");
const caloriesResult = document.getElementById("caloriesResult");

let totalProtein = 0;
let totalFat = 0;
let totalCarb = 0;
let totalCalories = 0;

liveCaloriesButton.addEventListener("click",function(){
    let protein = Number(proteinInput.value);
    let fat = Number(fatInput.value);
    let carb = Number(carbInput.value);
    let calories = protein *4 + fat *9 + carb *4;
    liveCalories.textContent = calories.toFixed(2);
})

calcButton.addEventListener("click",function(){
    let protein = Number(proteinInput.value);
    let fat = Number(fatInput.value);
    let carb = Number(carbInput.value);
    let calories = protein *4 + fat *9 + carb *4;

    totalProtein += protein;
    totalFat += fat;
    totalCarb += carb;
    totalCalories += calories;

    proteinResult.textContent = totalProtein.toFixed(2);
    fatResult.textContent = totalFat.toFixed(2);
    carbResult.textContent = totalCarb.toFixed(2);
    caloriesResult.textContent = totalCalories.toFixed(2);

    const newInputItem = document.createElement("li");
    newInputItem.textContent = `タンパク質: ${protein}g, 脂質: ${fat}g, 糖質: ${carb}g, カロリー: ${calories}kcal`;
    inputList.appendChild(newInputItem);

    proteinInput.value = "";
    fatInput.value = "";
    carbInput.value = "";
    liveCalories.textContent = "";
})
