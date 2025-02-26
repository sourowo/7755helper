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

        // 將新按鈕插入到現有選項的最前面
        var userOptionsDiv = document.getElementById('user-options');
        userOptionsDiv.insertBefore(newButton, userOptionsDiv.firstChild);

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
