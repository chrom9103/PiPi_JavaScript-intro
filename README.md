# PiPi_JavaScript-intro

JavaScript講習会では、Web開発において不可欠なプログラミング言語であるJavaScriptを通して基礎的な文法を学びます。  

## 目次

## 0. はじめに
今回の実習で使うものの準備をします！
### 0.1 事前設定
JavaScript講習会では事前に以下の環境が整っている前提で進められる。
 - Visual Studio Code
 - Node.js

> [!IMPORTANT]
> 何か問題が起きたら気軽に相談しましょう！

## 1. JavaScript基礎講習

### 1.1. JavaScript開発の基礎

#### 1.1.1. Hello world!
早速ですがプログラミングを始めていきましょう！  
その前にVScode上にある"出力(console)"に「Hello world!」という文字を出してみます。
tutorial.jsに以下のコードを書いてから`実行>デバッグの開始`から実行してみましょう。
```javascript copy
console.log("Hello world!");
```
> [!TIP]
> - Hello world!とは
>   プログラミング言語の学習を始めるにあたって、必ず最初に唱えることになっているおまじないである。  
>   このおまじないを唱えると画面に「Hello World!」と表示され、動作はただそれだけである。  
>   初学者の学習の道筋を清めるための一種の地鎮祭のようなものである。  

コンソールに「Hello world!」と表示されたら成功です。  
`console.log()`というコマンドで、括弧内の要素をコンソールに出力することができるので覚えておきましょう。

#### 1.1.2. コード記述のルール

<details><summary>1.1.2.1. 大文字/小文字の区別</summary>

#WRITE ME!!
</details>

<details><summary>1.1.2.2. 全角/半角の区別</summary>

#WRITE ME!!
</details>

<details><summary>1.1.2.3. 空白文字</summary>

#WRITE ME!!
</details>

<details><summary>1.1.2.4. セミコロン</summary>

#WRITE ME!!
</details>

<details><summary>1.1.2.5. コメント</summary>

#WRITE ME!!
</details>

### 1.2. 変数とデータ型

### 1.2.1. 変数と定数

#### 1.2.1.1. 変数宣言 
変数とは、プロフラムで使われる値を名前付きで管理する**ラベルのようなもの**です。プログラムを書いていると同じ値を何度も使ったり一時的に値を保持したいケースが出てきます。このようなときに次のように変数で値に対して名前を付けておけば任意のタイミングで繰り返し使用できます。
```javascript
let text = "Hello world!"
console.log(text)
> Hello world!
```
変数を使用する際には主に`let`というコマンドを記述します。また、一度値を設定すると変更ができない特殊な変数(**定数**)もあります。
| :---: | :---: | :---: | 
|       | 再代入 | 再宣言 | 
| const | ×      | ×      | 
| let   | 〇     | ×      | 
| var   | 〇     | 〇     | 

変数を使うにはまず変数の宣言をする必要があります。
```javascript
let 変数名 = 値
```

変数名(**識別子**という)はある程度決まった形式で命名しますが基本的に半角英数字で命名します。

#### 1.2.1.2. 値の再代入
まずは`let`を使って宣言した変数の値を上書きする方法について確認していきます。(このことを値の**再代入**という)
```javascript
let msg = "Good morning!"
console.log(text)
> Good morning!

msg = "Hello!"
console.log(text)
> Hello!
```

> [!TIP]
> 定数(const)を使った場合には値の再代入を行うことができません。
> ```javascript
> const msg = "Good morning!"
> msg = "Hello!"
> > Uncaught TypeError TypeError: Assignment to constant variable. [訳:型エラー：定数に対する値の代入]

> [!NOTE]
> 識別子の命名規則
> JavaScriptでは次のルールに従って識別子の命名を行うことができます。
> ```
> 識別子の命名規則
> - 予約語は使用できない(const const=2などはできない)
> - 1文字目は必ずアルファベットorアンダースコア(_)orドル記号($)から始めなければならない(数値は使用不可)
> - 2文字目以降は数値も使用可能
> - 大文字と小文字は区別される
> - Unicodeのアルファベットなども使用可能。しかしバグの原因となるため特別な理由があるとき以外は使用しないこと
> ```
> 識別子の命名には一般的にキャメルケース、スネークケースなどが使われます。
> <details><summary>キャメルケース</summary>
> 
> 単語と単語をアンダースコアで統合しすべて小文字で表現する(person_nameなど)
> </details>
> <details><summary>スネークケース</summary>
> 
> 単語と単語を統合して1つ目の単語は小文字ではじめそれ以降の単語は大文字で始める(personName)
> </details>

### 1.2.2. データ型

#### 1.2.2.1. 文字列(String)
文字列型は文字の集合(文字列)を表すデータ型です。(この文章も文字列である!)  
コード上で文字列を書くためには**シングルクォート**('), **ダブルクォート**("), または**バッククォート**(`)を使用します。
> [!TIP]
> 1.1.1で実行した`console.log("Hello world!");`において、「Hello world!」の両端を「"」で囲んだのは文字列として認識させるためです。シングルクォートやバッククォートを使用しても同様に文字列として認識されます。

JavaScriptの場合は、シングルクォートまたはダブルクォートのどちらを突かtt4絵も特に違いはありません。一方、前後でクォートの種類が異なるとエラーとなります。
```javascript
console.log("これはエラーになります')
```
文字列同士はプラス(+)の演算子を使って結合できます。
```javascript
console.log("こんにちは、" + "くろむ" + "さん。")
> こんにちは、くろむさん。
```

#### 1.2.2.2. 数値(Number)
数値型は数値を表すデータ型です。  
数値型は $`-(2^{53}-1)`$ から $`2^{53}-1`$ までの数値を表現できます。
```javascript
console.log(1 + 2)
> 3
```
文字列型における数字と数値型における数値は、見た目は同じでも異なるデータとして扱われます。
文字列型における数字はあくまで「文字」として扱われるため、計算には直接使用できません。
```javascript
console.log(1 + "2")
> "12"
```

#### 1.2.2.3. BigInt
BigInt型 は、非常に大きな整数を扱うためのデータ型です。数値型は $`-(2^{53}-1)`$ から $`2^{53}-1`$ までの数値しか表せず、その範囲を超える整数の場合には値が丸め込まれます。一方でBigIntの場合には数値型では表せない値の範囲を表現できます。  
数値の末尾に**n**をつけることでBigInt型の数値として定義できます。
```javascript
//Number型では正常処理の範囲外のため誤った値が表示される
console.log( 2 ** 53 + 1 )
> 9007199254740992
//BigInt型であれば問題なく表示可能
console.log( 2n ** 53n + 1n )
> 9007199254740993n
```

なお、このBigInt型と数値型は混在して使用することができないため注意してください。
また、BigIntはあくまで整数値を表す方になるため小数点以下の値は切り捨てられます。
```javascript
const num = 5n
const den = 4n
console.log( num / den )
> 1n  //小数点以下は切り捨てられる( 1.25 -> 1 )
```

#### 1.2.2.4. 真偽値(Boolean)
真偽値は**true**または**false**という値をとります。trueの場合には真, falseの場合には偽ということになります。真偽値はifなどの条件文と併せて使われることが多々あります。(条件文は[1.4.1](#141-条件分岐)で解説)  
真偽値は等価性の結果として返されることがしばしばあります。(等価性は[1.3.3](#133-等価演算子)で解説)
```javascript
console.log( 3 == 3 )
> true
console.log( 3 == 5 )
> false
```

#### 1.2.2.5. null
nullは参照を保持していないことを表します。すなわち「変数が空である」ことを意図的に表す特別な型です。

> [!TIP]
> ```
> 1 ：仕様書無しさん ：02/06/20 15:09  
> 　  ∧＿∧ 　　   
> 　（　´∀｀）＜　ぬるぽ    
> 
> 2 ：仕様書無しさん ：02/06/20 15:11  
>   
> 　 （　・∀・）　　　|　|　ｶﾞｯ  
> 　 と　　　　）　 　 |　|  
> 　　    Ｙ　/ノ　　　 人  
> 　　　   /　）　 　 < 　>__Λ∩  
> 　     ＿/し'　／／. Ｖ｀Д´）/ ←>>1  
> 　    （＿フ彡　　　　　 　　/  
> ```

#### 1.2.2.6. undefined
undefinedは変数が未定義であることを表しています。変数を制限するときに値を代入しない場合には、undefinedがプログラムによって自動的に設定されます。
```javascript
let hoge
console.log( hoge )
> undefined
```

### 1.3. 演算子
演算子とは値をもとに何かしらの処理を行いその結果を返す記号のことです。これまで使ってきた"="や"+"などの記号がそれに該当します。

#### 1.3.1. グループ化演算子
グループ化演算子`()`は通常の演算子の優先順位を変更し、意図した順番で計算を行うことができます。
```javascript
console.log( 2 + 3 * 4)
> 14
console.log( ( 2 + 3 ) * 4)
> 20
```

#### 1.3.2. 算術演算子
算術演算子は、数値を使った計算を行いその結果を返す演算子です。基本的な四則演算(加算・減算・乗算・除算)に加えて、剰余(余り)を求める演算子などがあります。
| 演算子 | 用途   | 例     | 結果 | 
| :----: | :---: | :----: | :---: | 
| +      | 加算   | 5 + 3  | 8    | 
| -      | 減算   | 10 - 4 | 6    | 
| *      | 乗算   | 6 * 2  | 12   | 
| /      | 除算   | 9 / 3  | 3    | 
| %      | 剰余   | 10 % 3 | 1    | 
| **     | べき乗 | 2 ** 3 | 8    | 

#### 1.3.3. 比較演算子
比較演算子は、2つの値を比較し結果として真(true)または偽(false)を返す演算子です。これにより値の大小関係や等価性をチェックすることができます。
| 演算子 | 用途                 | 例     | 結果  | 
| :----: | :-----------------: | :----: | :---: | 
| ==     | 等価(イコール)       | 5 == 5 | true  | 
| !=     | 非等価(notイコール)  | 5 != 5 | false | 
| >      | より大きい(大なり)   | 5 > 3  | true  | 
| <      | より小さい(小なり)   | 5 < 3  | false | 
| >=     | 以上(大なりイコール) | 5 >= 3 | true  | 
| <=     | 以下(小なりイコール) | 5 <= 3 | false | 

### 1.4. 制御構文

#### 1.4.1. 条件分岐
「もし〇〇なら～～を実行する」という処理により、特定の条件にのみ実行される処理を書きましょう。  
javascriptのif文は、ifに続く丸括弧()内の条件式がtrueの場合、それに続く波括弧{}内の処理を実行します。条件式がfalseの場合には{}内の処理は実行せずif文の次の行に処理を進めます。
```javascript
if( 条件式 ){
  ifブロック
}
```
もっとも単純化した例は次の通りです。
```javascript
let hasFlag = true
if( hasFlag ){
  console.log("cleard")
}
> cleard
```
また、比較演算子を使用することにより次のような実装をすることができます。
```javascript
let score = 100
if( score == 100 ){
  console.log("Excellent!!")
}
> Excellent!!
```
else ifやelseを使うことで、条件式がfalseの場合に別の処理を実行することができます。
```javascript
let score = 70
if( score == 100 ){
  console.log("Excellent!!")
} else if (score >= 80) {
  console.log("Good!")
} else if (score >= 60) {
  console.log("Pass")
} else {
  console.log("Bad")
}
> Pass
```
この例ではscoreが100の場合は"Excellent!!",80以上100未満の場合は"Good!",60以上80未満の場合は"Pass",それ以下の場合は"Bad"と表示されます。

#### 1.4.2. 反復処理
開発では同じ処理を何度も繰り返し行うことがあります。試しに"Loading..."と5回出力するプログラムを書いてみましょう。
```javascript
console.log("Loading...")
console.log("Loading...")
console.log("Loading...")
console.log("Loading...")
console.log("Loading...")
> Loading...
> Loading...
> Loading...
> Loading...
> Loading...
```
5回程度なら面倒な思いをして可読性の悪いコードを書けば済みますが煩雑です。そこで反復処理を行います。  
反復処理は同じ処理を繰り返し実行するための構文です。JavaScriptではwhile文やfor文を使って反復処理を行います。

#### 1.4.2.1. while文
while文は条件式がtrueのときに処理を繰り返し、falseが取得されたときに処理を抜けます。
```javascript
while( 条件式 ){
  whileブロック
}
```
もっとも単純化した例は次の通りです。
```javascript
let cnt = 0
while( cnt < 5 ){
  console.log(cnt)
  cnt += 1
}
> 0
> 1
> 2
> 3
> 4
```

#### 1.4.2.2. for文
for文は初期化処理,条件式,更新式を用いて繰り返し処理を行います。実行する回数が決まっている場合はwhileではなくforを使用することが一般的です。
```javascript
for( 初期化処理 ; 条件式 ; 更新式 ){
  forブロック
}
```
もっとも単純化した例は次の通りです。
```javascript
for( idx = 0 ; idx < 5 ; idx++ ){
  console.log(idx)
}
> 0
> 1
> 2
> 3
> 4
```

### 1.5. コレクション
コレクションとは値をまとまりで管理するオブジェクトのことです。ここでは配列(Array)を紹介します。

#### 1.5.1. 配列
複数の値を1つの変数にまとめて格納したものを「配列」といいます。そこに値を代入したり参照したりして使用します。  
まずは配列を作ってみましょう。
```javascript
let menu = ["pizza","pasta","meat","soup","dessert"]
```
変数"menu"に配列を代入しました。各要素はコンマで区切られており5つの要素が含まれています。

#### 1.5.1.1. 配列の基本操作
生成した配列の特定の値を取得・変更したい場合には添字(index)を使います。
```javascript
console.log(menu[0]) //0番目の要素を取得
> "pizza"
menu[3] = "bread" //3番目の要素を変更
console.log(menu)
> ["pizza","pasta","meat","bread","dessert"]
```
配列に要素を追加したい場合には`push`などを使用します。
```javascript
menu.push("soup") //末尾に要素を追加
console.log(menu)
> ["pizza","pasta","meat","bread","dessert","soup"]
```
逆に要素を削除したい場合には`pop`などを使用します。
```javascript
menu.pop() //末尾の要素を削除
console.log(menu)
> ["pizza","pasta","meat","bread","dessert"]
```

#### 1.5.1.2. 配列の活用例
for文を使用することにより配列の要素を順番に処理することができます。例えば配列の全要素を出力する場合は次のようにすることができます。
```javascript
let menu = ["pizza", "pasta", "meat", "bread", "dessert"];
for (let i = 0; i < menu.length; i++) {
    console.log(menu[i]);
}
> pizza
> pasta
> meat
> bread
> dessert
```
menu.lengthにより配列の要素数をforループの上限数としています。

### 1.6. 関数

### 2. JavaScript基礎演習

***
参考文献  
外村将大(2021).『独習JavaScript 新版』.翔泳社.
