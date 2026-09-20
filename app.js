const button = document.getElementById("calcButton");
const proteinInput = document.getElementById("proteinInput");
const proteinResult = document.getElementById("proteinResult");
const caloriesResult = document.getElementById("caloriesResult");

button.addEventListener("click",function(){
    let protein = Number(proteinInput.value);
    if (protein < 0 || proteinInput.value == ""){
        alert("0以上の数値を入力してください。");
        return;
    }
})