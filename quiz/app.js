// クイズ一覧を保持した配列
const quiz = [
  {
    question: 'ゲーム至上最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [
      'MOTHER2',
      'スーパーマリオブラザーズ',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーIVの主人公の名前は',
    answers: [
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル'
    ],
    correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// htmlのオブジェクトを変数に入れる時は変数の頭に$をつけるのが慣習
const $buttons = document.getElementsByTagName('button');
const buttonLength = $buttons.length;

// クイズの問題文 選択肢を定義
const setupQuiz = () => {
  // 問題文の表示
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $buttons[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

// ボタンクリック時のクイズ正解、判定用メソッド
// e = イベントのこと 例えばクリックであればクリックされた対象のことを指す
const clickHandler = (e) => {

  // 正誤判定
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解!');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('クイズ終了! あなたの正解数は' + score + '/' + quizLength + 'です。');
    // 2秒たったら更新処理
    setTimeout("location.reload()",2000);
  }
}

// ボタンのクリック時の動作用メソッド
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $buttons[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

