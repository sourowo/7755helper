// 設定輸入框的值
function setInputValue(option) {
    var inputField = document.getElementById('input-field');
    inputField.value += option + '\n'; // 每個選項換行
}

// 新增自定義選項
function addCustomOption() {
    var customOption = document.getElementById('custom-option').value;
    if (customOption) {
        setInputValue(customOption);
        document.getElementById('custom-option').value = ''; // 清空輸入框
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
