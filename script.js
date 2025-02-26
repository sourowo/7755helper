document.addEventListener("DOMContentLoaded", function () {
    loadInputValue(); // 載入輸入欄內容
});

// 設定輸入框的值
function setInputValue(option) {
    var inputField = document.getElementById("input-field");
    inputField.value += option + "\n";
    saveInputValue();
}

// 清除輸入框內容
function clearInputValue() {
    document.getElementById("input-field").value = "";
    saveInputValue();
}

// 監聽輸入框變化，並存入 localStorage
document.getElementById("input-field").addEventListener("input", saveInputValue);

function saveInputValue() {
    var inputValue = document.getElementById("input-field").value;
    localStorage.setItem("savedInput", inputValue);
}

function loadInputValue() {
    var savedInput = localStorage.getItem("savedInput");
    if (savedInput) {
        document.getElementById("input-field").value = savedInput;
    }
}

// 複製輸入內容
function copyInputValue() {
    var inputField = document.getElementById("input-field");
    inputField.select();
    document.execCommand("copy");

    var copyMessage = document.getElementById("copy-message");
    copyMessage.style.display = "block";

    setTimeout(() => copyMessage.style.display = "none", 3000);
}
