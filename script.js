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

// 儲存輸入框內容到 localStorage
function saveInputValue() {
    var inputValue = document.getElementById("input-field").value;
    localStorage.setItem("savedInput", inputValue);
}

// 載入輸入框內容
document.addEventListener("DOMContentLoaded", function () {
    loadInputValue(); // 載入輸入欄內容
    loadCustomOptions(); // 載入自訂選項
});

// 載入自訂選項
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

    var removeButton = document.createElement("button");
    removeButton.className = "remove-btn";
    removeButton.textContent = "X";
    removeButton.onclick = function () {
        removeOption(optionText, optionContainer);
    };

    optionContainer.appendChild(newButton);
    optionContainer.appendChild(removeButton);
    document.getElementById("custom-options").appendChild(optionContainer);
}

// 刪除選項
function removeOption(optionText, optionContainer) {
    optionContainer.remove(); // 從畫面上移除
    deleteCustomOption(optionText); // 從 localStorage 移除
}

// 儲存自定義選項到 localStorage
function saveCustomOption(optionText) {
    var customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];
    
    if (!customOptions.includes(optionText)) {
        customOptions.push(optionText);
        localStorage.setItem("customOptions", JSON.stringify(customOptions));
    }
}

// 刪除自定義選項從 localStorage
function deleteCustomOption(optionText) {
    var customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];
    customOptions = customOptions.filter(option => option !== optionText);
    localStorage.setItem("customOptions", JSON.stringify(customOptions));
}

// 新增自定義選項
function addCustomOption() {
    var customOptionInput = document.getElementById("custom-option");
    var optionText = customOptionInput.value.trim();

    if (optionText !== "") {
        createOptionButton(optionText);
        saveCustomOption(optionText);
        customOptionInput.value = ""; // 清空輸入框
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

