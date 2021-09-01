// 基本文法まとめ
// グローバル変数 ※あまり使わない方がいい
var hw = 'Hello World!';

// ローカル変数
let hw2 = 'Hello World2!';

// 定数
const HW_3 = 'Hello World3!';

// 配列
let array = [1, 2, 3, 4, 5];
console.log(array);
console.log(array[0]);

// ループ処理
//   for
console.log('for roop start');
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//   while
let index = 0;
console.log('while roop start');
while (index < array.length) {
  // 繰り返したい命令
  console.log(array[index]);
  index++;
}

// 条件分岐
if (array.length > 3) {
  console.log('true');
} else {
  console.log('false');
}

// 関数
//   アロー関数
const test = () => {
  // ここに実行したい命令を書く
  console.log('test function run')
}

const argTest = (arg) => {
  console.log(arg);
}

test();
argTest("argTest function");

// オブジェクト
//   javaで言うクラス 状態保持が出来る
const obj = {
  // プロパティとキー(フィールド)
  color: 'pink',
  size: 'small',
  purfume: 'mint',

  // 関数の定義
  testFunction: () => {
    console.log('inObj testFunction');

  }
};

console.log(obj)
console.log(obj.color)
console.log(obj.testFunction());

// 標準クラスの例
//   windowクラス
console.log(window);
// window.alert('アラートテスト')

//   documentクラス
//     要素の取得を行うgetElementByTagName
let buttonTag = document.getElementsByTagName('button');
//     一つ目のボタンをクリックしたら関数を実行するようにする
console.log(buttonTag[0].addEventListener('click', () => {
  window.alert('ボタンがクリックされました。');
}));
