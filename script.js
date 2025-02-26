document.addEventListener("DOMContentLoaded", function () {
    loadCustomOptions();
});

// 設定輸入框的值
function setInputValue(option) {
    var inputField = document.getElementById("input-field");
    inputField.value += option + "\n";
}

// 新增自定義選項
function addCustomOption() {
    var customOptionInput = document.getElementById("custom-option");
    var customOption = customOptionInput.value.trim();

    if (customOption) {
        createOptionButton(customOption);
        saveCustomOptions(customOption);
        customOptionInput.value = "";
    }
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

// 清除輸入框內容
function clearInputValue() {
    document.getElementById("input-field").value = "";
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
