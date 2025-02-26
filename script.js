// 載入已儲存的自定義選項和輸入框內容
window.onload = function() {
    loadCustomOptions();
    loadInputValue();
};

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

// 監聽輸入框變化，並存入 localStorage
document.getElementById("input-field").addEventListener("input", saveInputValue);

function saveInputValue() {
    var inputValue = document.getElementById("input-field").value;
    localStorage.setItem("savedInput", inputValue);
}

function loadInputValue() {
    var savedInput = localStorage.getItem("savedInput");
    if (savedInput) {
        document.getElementById("input-field").value = savedInput;
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

    customOptions.forEach(function(option, index) {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("custom-option");
        
        const optionButton = document.createElement("button");
        optionButton.textContent = `*${option}*`;
        optionButton.classList.add("option-btn");
        optionButton.onclick = function() {
            setInputValue(`*${option}*`);
        };
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.classList.add("remove-btn");
        removeButton.onclick = function() {
            removeCustomOption(index);
        };

        optionDiv.appendChild(optionButton);
        optionDiv.appendChild(removeButton);
        customOptionsContainer.appendChild(optionDiv);
    });
}

// 新增自定義選項
function addCustomOption() {
    const customOptionInput = document.getElementById("custom-option");
    const optionText = customOptionInput.value.trim();

    if (optionText !== "") {
        saveCustomOptions(optionText);
        loadCustomOptions();  // 重新加載自定義選項顯示
        customOptionInput.value = ""; // 清空輸入框
    }
}

// 移除自定義選項
function removeCustomOption(index) {
    let customOptions = JSON.parse(localStorage.getItem("customOptions")) || [];
    customOptions.splice(index, 1);  // 移除指定的選項
    localStorage.setItem("customOptions", JSON.stringify(customOptions));
    loadCustomOptions();  // 重新加載自定義選項顯示
}
