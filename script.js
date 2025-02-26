// 當頁面載入完成時執行的代碼
window.onload = function() {
    loadCustomOptions();  // 加載自定義選項
    loadInputValue();     // 加載輸入框的內容
    loadDefaultOptions(); // 加載既定選項
};

// 加載既定選項
function loadDefaultOptions() {
    const defaultOptions = [
        "*描述和台詞均不要再重複*",
        "*文字段落間請空一行，請接續情形發展描述下去，字數至少700字*",
        "*善用擬聲詞進行描寫*"
    ];

    const container = document.getElementById("default-options");

    defaultOptions.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option-btn");
        button.textContent = option;
        button.onclick = function() {
            setInputValue(option);
        };
        container.appendChild(button);
    });
}

// 設定輸入框的值
function setInputValue(option) {
    const inputField = document.getElementById("input-field");
    inputField.value += option + "\n";
    saveInputValue();
}

// 儲存輸入框內容到 localStorage
function saveInputValue() {
    const inputValue = document.getElementById("input-field").value;
    localStorage.setItem("savedInput", inputValue);
}

// 加載輸入框的內容
function loadInputValue() {
    const savedInput = localStorage.getItem("savedInput");
    if (savedInput) {
        document.getElementById("input-field").value = savedInput;
    }
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
    document.getElementById("input-field").value = "";
    saveInputValue();
}

// 儲存自定義選項到 localStorage
function saveCustomOptions(optionText) {
    let customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];
    customOptions.push(optionText);
    localStorage.setItem("customOptions", JSON.stringify(customOptions));
}

// 加載儲存的自定義選項
function loadCustomOptions() {
    let customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];
    const customOptionsContainer = document.getElementById("custom-options");
    customOptionsContainer.innerHTML = ""; // 清空自定義選項區域

    customOptions.forEach(optionText => {
        createOptionButton(optionText);
    });
}

// 創建自定義選項按鈕
function createOptionButton(optionText) {
    const customOptionsContainer = document.getElementById("custom-options");

    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.textContent = optionText;
    button.onclick = function() {
        setInputValue(optionText);
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
        deleteCustomOption(optionText);
        customOptionsContainer.removeChild(button);
    };

    customOptionsContainer.appendChild(button);
    customOptionsContainer.appendChild(deleteButton);
}

// 新增自定義選項
function addCustomOption() {
    const customOptionInput = document.getElementById("custom-option");
    const customOptionText = customOptionInput.value.trim();

    if (customOptionText) {
        createOptionButton(customOptionText);
        saveCustomOptions(customOptionText);
        customOptionInput.value = ""; // 清空輸入框
    }
}

// 刪除自定義選項
function deleteCustomOption(optionText) {
    let customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];
    customOptions = customOptions.filter(option => option !== optionText);
    localStorage.setItem("customOptions", JSON.stringify(customOptions));
}
