// 等待頁面加載完成後，恢復記憶的選項和輸入內容
window.onload = () => {
    // 恢復自定義選項
    const customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];
    customOptions.forEach(option => createCustomOptionButton(option));

    // 恢復使用者輸入的內容
    const savedInputValue = localStorage.getItem("inputFieldValue");
    if (savedInputValue) {
        document.getElementById("input-field").value = savedInputValue;
    }
};

// 設定輸入框的值
function setInputValue(option) {
    var inputField = document.getElementById("input-field");
    inputField.value += option + "\n";
    saveInputValue(inputField.value);
}

// 新增自定義選項
function addCustomOption() {
    const customOptionText = document.getElementById("custom-option").value;
    if (customOptionText.trim() !== "") {
        createCustomOptionButton(customOptionText);
        saveCustomOption(customOptionText);
        document.getElementById("custom-option").value = ''; // 清空輸入框
    }
}

// 創建自定義選項按鈕
function createCustomOptionButton(optionText) {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.textContent = optionText;
    button.onclick = () => setInputValue(optionText);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = () => deleteCustomOption(optionText, button, deleteButton);

    const container = document.getElementById("custom-options-container");
    const optionContainer = document.createElement("div");
    optionContainer.appendChild(button);
    optionContainer.appendChild(deleteButton);
    container.appendChild(optionContainer);
}

// 儲存自定義選項至localStorage
function saveCustomOption(optionText) {
    let customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];
    customOptions.push(optionText);
    localStorage.setItem("customOptions", JSON.stringify(customOptions));
}

// 刪除自定義選項
function deleteCustomOption(optionText, button, deleteButton) {
    let customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];
    customOptions = customOptions.filter(option => option !== optionText);
    localStorage.setItem("customOptions", JSON.stringify(customOptions));

    button.remove();
    deleteButton.remove();
}

// 複製輸入框內容
function copyInputValue() {
    const inputField = document.getElementById("input-field");
    inputField.select();
    document.execCommand("copy");

    const copyMessage = document.getElementById("copy-message");
    copyMessage.style.display = "block";

    setTimeout(() => copyMessage.style.display = "none", 3000);
}

// 清除輸入框內容
function clearInputValue() {
    document.getElementById("input-field").value = '';
    saveInputValue('');
}

// 保存輸入框的內容到localStorage
function saveInputValue(value) {
    localStorage.setItem("inputFieldValue", value);
}
