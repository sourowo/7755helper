// 摺疊區塊功能
document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        // 這裡確保摺疊區塊的顯示/隱藏能夠正確切換
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// 設定輸入框的值
function setInputValue(option) {
    var inputField = document.getElementById("input-field");
    inputField.value += option + "\n";
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
}

// 載入自定義選項
function loadCustomOptions() {
    let customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];
    customOptions.forEach(optionText => {
        createCustomOptionButton(optionText);
    });
}

// 載入輸入框的文字
function loadInputValue() {
    const inputField = document.getElementById("input-field");
    const savedText = localStorage.getItem("inputText");
    if (savedText) {
        inputField.value = savedText;
    }
}

// 監聽輸入框的變化並儲存
document.getElementById("input-field").addEventListener("input", () => {
    const inputField = document.getElementById("input-field");
    localStorage.setItem("inputText", inputField.value);
});

// 初始化載入
window.onload = function() {
    loadCustomOptions();
    loadInputValue();
};
