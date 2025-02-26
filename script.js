// 設定輸入框的值
function setInputValue(option) {
    var inputField = document.getElementById('input-field');
    inputField.value += option + '\n'; // 每個選項換行
}

// 新增自定義選項
function addCustomOption() {
    var customOption = document.getElementById('custom-option').value;
    if (customOption) {
        // 創建一個新的按鈕並將其加入選項區域
        var newButton = document.createElement('button');
        newButton.className = 'option-btn';
        newButton.textContent = customOption;

        // 當按鈕被點擊時，將選項添加到輸入框中
        newButton.onclick = function() {
            setInputValue(customOption);
        };

        // 將新按鈕插入到現有選項的末尾
        var userOptionsDiv = document.getElementById('user-options');
        userOptionsDiv.appendChild(newButton);

        // 儲存自定義選項到 localStorage
        saveCustomOptions();

        // 清空自定義選項的輸入框
        document.getElementById('custom-option').value = '';
    }
}

// 複製輸入框內容
function copyInputValue() {
    var inputField = document.getElementById('input-field');
    inputField.select();
    document.execCommand('copy');

    // 顯示已複製訊息
    var copyMessage = document.getElementById('copy-message');
    copyMessage.style.display = 'block';

    // 3秒後隱藏已複製訊息
    setTimeout(function() {
        copyMessage.style.display = 'none';
    }, 3000);
}

// 儲存自定義選項到 localStorage
function saveCustomOptions() {
    var userOptionsDiv = document.getElementById('user-options');
    var buttons = userOptionsDiv.getElementsByClassName('option-btn');
    var customOptions = [];

    // 獲取所有自定義選項按鈕的文字
    for (var i = 0; i < buttons.length; i++) {
        customOptions.push(buttons[i].textContent);
    }

    // 將選項存儲到 localStorage
    localStorage.setItem('customOptions', JSON.stringify(customOptions));
}

// 從 localStorage 加載自定義選項
function loadCustomOptions() {
    var customOptions = localStorage.getItem('customOptions');

    // 如果有自定義選項，則顯示在頁面上
    if (customOptions) {
        customOptions = JSON.parse(customOptions);
        var userOptionsDiv = document.getElementById('user-options');

        customOptions.forEach(function(option) {
            var newButton = document.createElement('button');
            newButton.className = 'option-btn';
            newButton.textContent = option;

            // 當按鈕被點擊時，將選項添加到輸入框中
            newButton.onclick = function() {
                setInputValue(option);
            };

            userOptionsDiv.appendChild(newButton);
        });
    }
}

// 頁面加載時，從 localStorage 加載自定義選項
window.onload = function() {
    loadCustomOptions();
};
