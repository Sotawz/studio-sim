
const studioSelect = document.getElementById('studio');
const hoursInput = document.getElementById('hours');
const micInput = document.getElementById('mic');
const totalDisplay = document.getElementById('total');

function calculate() {
  // 1. それぞれの値を取得する
  let price = Number(studioSelect.value); // スタジオ単価
  let hours = Number(hoursInput.value);  // 時間
  let micCount = Number(micInput.value); // マイクの数
  let micPrice = micCount * 500; // マイク代 (数に応じて計算)

  //if文で時間の上限チェック
    if (hours < 1) {
      totalDisplay.textContent = "時間は1以上を入力してください";
      return;
    }else if (hours > 24) {
      totalDisplay.textContent = "時間は24以下を入力してください";
      return;
    }

    // マイクの数の上限チェック
    if (micCount < 0) {
      totalDisplay.textContent = "マイクの数は0以上を入力してください"; 
        return;
    }else if (micCount > 5) { 
        totalDisplay.textContent = "マイクの数は5以下を入力してください";
        return;}

  // 2. 計算する
  let total = (price * hours) + (micPrice);

  // 3. 画面の数字を書き換える
  totalDisplay.textContent = total;
}

studioSelect.addEventListener('change', calculate);
hoursInput.addEventListener('input', calculate);
micInput.addEventListener('input', calculate);
micInput.addEventListener('input', calculate);