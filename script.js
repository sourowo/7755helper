// 新增自定義選項並顯示於自定義分類
function addCustomOption() {
    var customOptionText = document.getElementById("custom-option").value.trim();
    
    if (customOptionText) {
        // 儲存自定義選項
        saveCustomOptions(customOptionText);
        
        // 創建並顯示按鈕
        createCustomOptionButton(customOptionText);

        // 清空輸入框
        document.getElementById("custom-option").value = "";
    }
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
        createCustomOptionButton(option);
    });
}

// 創建自定義選項按鈕
function createCustomOptionButton(optionText) {
    var customOptionsContainer = document.getElementById("custom-options-container");

    var newButton = document.createElement("button");
    newButton.className = "option-btn";
    newButton.textContent = optionText;
    newButton.onclick = function () {
        setInputValue(optionText);
    };

    customOptionsContainer.appendChild(newButton);
}

// 載入頁面時加載自定義選項
document.addEventListener("DOMContentLoaded", function () {
    loadCustomOptions(); // 載入自訂選項
});
