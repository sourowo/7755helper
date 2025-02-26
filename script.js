<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>卿卿我我小幫手</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>卿卿我我小幫手</h1>
    <div id="user-options">
        <div class="option-container">
            <button class="option-btn" onclick="setInputValue('描述和台詞均不要再重複')">描述和台詞均不要再重複</button>
            <button class="option-btn" onclick="setInputValue('允許角色根據自身性格和想法發展劇情')">允許角色根據自身性格和想法發展劇情</button>
            <button class="option-btn" onclick="setInputValue('文字段落間請空一行，請接續情形發展描述下去，字數至少700字')">文字段落間請空一行，請接續情形發展描述下去，字數至少700字</button>
        </div>
    </div>

    <!-- 自定義選項輸入框區域 -->
    <input type="text" id="custom-option" placeholder="輸入自定義選項">
    <button onclick="addCustomOption()">新增自定義選項</button>

    <!-- 輸入框放在這裡，自定義選項下方 -->
    <textarea id="input-field" rows="10" cols="50" style="resize: none;"></textarea><br>

    <!-- 複製內容按鈕放在輸入框下方 -->
    <button onclick="copyInputValue()">複製內容</button>

    <!-- 複製訊息提示 -->
    <div id="copy-message" style="display: none; color: green;">已複製！</div>

    <script src="script.js"></script>
</body>
</html>
