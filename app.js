const liveCaloriesButton = document.getElementById("liveCaloriesButton");
const calcButton = document.getElementById("calcButton");
const proteinInput = document.getElementById("proteinInput");
const fatInput = document.getElementById("fatInput");
const carbInput = document.getElementById("carbInput");
const saltInput = document.getElementById("saltInput");

const liveCalories = document.getElementById("liveCalories");
const proteinResult = document.getElementById("proteinResult");
const fatResult = document.getElementById("fatResult");
const carbResult = document.getElementById("carbResult");
const saltResult = document.getElementById("saltResult");
const caloriesResult = document.getElementById("caloriesResult");

let totalProtein = 0;
let totalFat = 0;
let totalCarb = 0;
let totalSalt = 0;
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
    let salt = Number(saltInput.value);
    let calories = protein *4 + fat *9 + carb *4;

    totalProtein += protein;
    totalFat += fat;
    totalCarb += carb;
    totalCalories += calories;
    totalSalt += salt;

    proteinResult.textContent = totalProtein.toFixed(2);
    fatResult.textContent = totalFat.toFixed(2);
    carbResult.textContent = totalCarb.toFixed(2);
    saltResult.textContent = totalSalt.toFixed(2);
    caloriesResult.textContent = totalCalories.toFixed(2);

    const newInputItem = document.createElement("li");
    newInputItem.textContent = `タンパク質: ${protein.toFixed(2)}g, 脂質: ${fat.toFixed(2)}g, 糖質: ${carb.toFixed(2)}g, カロリー: ${calories.toFixed(2)}kcal`;
    inputList.appendChild(newInputItem);

    proteinInput.value = "";
    fatInput.value = "";
    carbInput.value = "";
    liveCalories.textContent = "";
})
