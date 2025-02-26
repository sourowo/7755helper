document.addEventListener("DOMContentLoaded", function () {
    loadCustomOptions(); // 頁面載入時加載已存儲的自定義選項
});

// 設定輸入框的值
function setInputValue(option) {
    var inputField = document.getElementById("input-field");
    inputField.value += option + "\n"; // 每個選項換行
}

// 新增自定義選項
function addCustomOption() {
    var customOptionInput = document.getElementById("custom-option");
    var customOption = customOptionInput.value.trim();

    if (customOption) {
        createOptionButton(customOption);
        saveCustomOptions(customOption);

        // 清空輸入框
        customOptionInput.value = "";
    }
}

// 創建選項按鈕（含刪除功能）
function createOptionButton(optionText) {
    var optionContainer = document.createElement("div");
    optionContainer.className = "option-container";

    var newButton = document.createElement("button");
    newButton.className = "option-btn";
    newButton.textContent = optionText;
    newButton.onclick = function () {
        setInputValue(optionText);
    };

    // 創建刪除按鈕
    var deleteButton = document.createElement("button");
    dele
