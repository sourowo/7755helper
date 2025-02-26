// 自定義選項載入
function loadCustomOptions() {
    let customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];
    customOptions.forEach(optionText => {
        createCustomOptionButton(optionText);
    });
}

// 創建自定義選項按鈕
function createCustomOptionButton(optionText) {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.textContent = optionText;
    button.onclick = () => setInputValue(optionText);

    const container = document.getElementById("custom-options-container");
    const optionContainer = document.createElement("div");
    optionContainer.appendChild(button);
    container.appendChild(optionContainer);
}

// 儲存自定義選項
function saveCustomOption(optionText) {
    let customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];
    customOptions.push(optionText);
    localStorage.setItem("customOptions", JSON.stringify(customOptions));
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

// 設定輸入框的值
function setInputValue(option) {
    var inputField = document.getElementById("input-field");
    inputField.value += option + "\n";
}

// 監聽輸入框變化並儲存文字
document.getElementById("input-field").addEventListener("input", () => {
    const inputField = document.getElementById("input-field");
    localStorage.setItem("inputText", inputField.value);
});

// 載入輸入框的文字
function loadInputValue() {
    const inputField = document.getElementById("input-field");
    const savedText = localStorage.getItem("inputText");
    if (savedText) {
        inputField.value = savedText;
    }
}

// 初始化
window.onload = function() {
    loadCustomOptions();
    loadInputValue();
};
