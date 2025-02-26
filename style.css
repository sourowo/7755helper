document.addEventListener("DOMContentLoaded", function () {
    loadInputValue(); // 載入輸入欄內容
    loadCustomOptions(); // 載入自訂選項
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

// 儲存自定義選項到 localStorage
function saveCustomOptions(optionText) {
    var customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];
    
    if (!customOptions.includes(optionText)) {
        customOptions.push(optionText);
        localStorage.setItem("customOptions", JSON.stringify(customOptions));
    }
}

// 從 localStorage 加載自定義選項
function loadCustomOptions() {
    var customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];

    customOptions.forEach(function (option) {
        createOptionButton(option);
    });
}

// 創建選項按鈕
function createOptionButton(optionText) {
    var optionContainer = document.createElement("div");
    optionContainer.className = "option-container";

    var newButton = document.createElement("button");
    newButton.className = "option-btn";
    newButton.textContent = optionText;
    newButton.onclick = function () {
        setInputValue(optionText);
    };

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "❌";
    deleteButton.onclick = function () {
        optionContainer.remove();
        deleteCustomOption(optionText);
    };

    optionContainer.appendChild(newButton);
    optionContainer.appendChild(deleteButton);

    document.getElementById("user-options").appendChild(optionContainer);
}

// 刪除自定義選項
function deleteCustomOption(optionText) {
    var customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];
    var newOptions = customOptions.filter(option => option !== optionText);

    localStorage.setItem("customOptions", JSON.stringify(newOptions));
}
