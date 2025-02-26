document.addEventListener("DOMContentLoaded", function () {
    loadInputValue(); // 載入輸入欄內容
    loadCustomOptions(); // 載入自訂選項
    setupAccordions(); // 初始化 Accordion 展開/折疊功能
});

// 設定輸入框的值
function setInputValue(option) {
    var inputField = document.getElementById("input-field");
    inputField.value += option + "\n";  // 將選項文字加入到輸入框並換行
    saveInputValue();  // 保存輸入框內容
}

// 儲存輸入框內容到 localStorage
function saveInputValue() {
    var inputValue = document.getElementById("input-field").value;
    localStorage.setItem("savedInput", inputValue);
}

// 載入頁面時載入已儲存的輸入框內容
function loadInputValue() {
    var savedInput = localStorage.getItem("savedInput");
    if (savedInput) {
        document.getElementById("input-field").value = savedInput;
    }
}

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

    // 點擊按鈕後將該選項文字輸入到輸入框
    newButton.onclick = function () {
        setInputValue(optionText);  // 將選項文字加入到輸入框
    };

    customOptionsContainer.appendChild(newButton);
}

// Accordion 功能：點擊按鈕展開/折疊面板
function setupAccordions() {
    var acc = document.getElementsByClassName("accordion-btn");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

// 複製內容
function copyInputValue() {
    var inputField = document.getElementById("input-field");
    inputField.select();
    document.execCommand("copy");

    var copyMessage = document.getElementById("copy-message");
    copyMessage.style.display = "block";

    setTimeout(() => copyMessage.style.display = "none", 3000);
}

// 清除輸入框內容
function clearInputValue() {
    document.getElementById("input-field").value = "";
    saveInputValue();
}
