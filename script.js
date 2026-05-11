
const studioSelect = document.getElementById('studio');
const hoursInput = document.getElementById('hours');
const micInput = document.getElementById('mic');
const totalDisplay = document.getElementById('total');
const yenSpan = document.getElementById('yen'); // 円表示の要素

function calculate() {
  // 1. それぞれの値を取得する
  let price = Number(studioSelect.value); // スタジオ単価
  let hours = Number(hoursInput.value);  // 時間
  let micCount = Number(micInput.value); // マイクの数
  let micPrice = micCount * 500; // マイク代 (数に応じて計算)

    if(hours<1 && micCount <0){
    totalDisplay.innerHTML = "<br>利用時間<br>マイクの数を<br>正しく入力してください";
    yenSpan.style.display = "none";
    return;
  }else if(hours>24 && micCount>5){
    totalDisplay.innerHTML = "<br>利用時間<br>マイクの数を<br>正しく入力してください";
    yenSpan.style.display = "none";
    return;
  }


  //if文で時間の上限チェック
    if (hours < 1) {
      totalDisplay.innerHTML = "<br>時間は1以上を<br>入力してください";
        yenSpan.style.display = "none";
      return;
    }else if (hours > 24) {
      totalDisplay.innerHTML = "<br>時間は24以下を<br>入力してください";
      yenSpan.style.display = "none";
      return;
    }

    // マイクの数の上限チェック
    if (micCount < 0) {
      totalDisplay.innerHTML = "<br>マイクの数は0以上を<br>入力してください"; 
      yenSpan.style.display = "none";
        return;
    }else if (micCount > 5) { 
        totalDisplay.innerHTML = "<br>マイクの数は5以下を<br>入力してください";
        yenSpan.style.display = "none";
        return;}

    yenSpan.style.display = "inline"; // エラーメッセージがない場合は円表示を戻す  
    

  // 2. 計算する
  let total = (price * hours) + (micPrice);

  // 3. 画面の数字を書き換える
  totalDisplay.textContent = total;
}

studioSelect.addEventListener('change', calculate);
hoursInput.addEventListener('input', calculate);
micInput.addEventListener('input', calculate);
micInput.addEventListener('input', calculate);
calculate(); // 初期表示の計算