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
>   このおまじないを唱えると画面に「Hello World」と表示され、動作はただそれだけである。  
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

> [!TIP]
> 識別子の命名規則

### 1.2.2. データ型

#### 1.2.2.1. 文字列(String)
文字列型は文字の集合(文字列)を表すデータ型を指します。(この文章も文字列である!)  
コード上で文字列を書くためには**シングルクォート**('), **ダブルクォート**("), または**バッククォート**(`)を使用します。
> [!TIP]
> 1.1.1で実行した`console.log("Hello world!");`において、「Hello world!」の両端を「"」で囲んだのは文字列として認識させるためです。シングルクォートやバッククォートを使用しても同様に文字列として認識されます。

JavaScriptの場合は、シングルクォートまたはダブルクォートのどちらを突かtt4絵も特に違いはありません。一方、前後でクォートの種類が異なるとエラーとなります。
> クォートの種類が異なるとエラー
> ```javascript
> console.log("これはエラーになります')
> ```
文字列同士はプラス(+)の演算子を使って結合できます。
> 文字列の結合
> ```javascript
> console.log("こんにちは、"+"くろむ"+"さん。")
> > こんにちは、くろむさん。
> ```

#### 1.2.2.2. 数値(Number)

#### 1.2.2.3. Bight

#### 1.2.2.4. 真偽値(Boolean)

#### 1.2.2.5. null

#### 1.2.2.6. undefined

### 1.3. 演算子

#### 1.3.1. グループ化演算子

#### 1.3.2. 算術演算子

#### 1.3.3. 等価演算子

#### 1.3.4. 代入演算子

### 1.4. 制御構文

#### 1.4.1. 条件分岐

#### 1.4.2. 反復処理

#### 1.4.2.1. while文

#### 1.4.2.2. for文

### 1.5. コレクション

#### 1.5.1. 配列

### 1.6. 関数

### 2. JavaScript基礎演習
