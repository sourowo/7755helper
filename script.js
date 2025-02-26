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

// 創建選項按鈕
function createOptionButton(optionText) {
    var newButton = document.createElement("button");
    newButton.className = "option-btn";
    newButton.textContent = optionText;
    newButton.onclick = function () {
        setInputValue(optionText);
    };

    // 插入按鈕到選項區域
    var userOptionsDiv = document.getElementById("user-options");
    userOptionsDiv.appendChild(newButton);
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

// 複製輸入框內容
function copyInputValue() {
    var inputField = document.getElementById("input-field");
    inputField.select();
    document.execCommand("copy");

    // 顯示已複製訊息
    var copyMessage = document.getElementById("copy-message");
    copyMessage.style.display = "block";

    // 3 秒後隱藏已複製訊息
    setTimeout(function () {
        copyMessage.style.display = "none";
    }, 3000);
}
