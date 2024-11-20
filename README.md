## 写経
[Node.js + Express + Socket.ioで簡易チャットを作ってみる](https://qiita.com/riku-shiru/items/ffba3448f3aff152b6c1)

<br/>
<br/>

## 技術スタック
- node.js22
- Express4.21.1
- socket.io4.8.1
- jquery

<br/>
<br/>

## 実行したコマンド（順不同）
- npm init
- npm i express socket.io

<br/>
<br/>

## 学べる点
- websocketの基礎知識
- socket.ioの基礎的な使い方（emit, on）
  - .emit(イベント名, data) でイベントを発火(=データの送信)
  - .on(<イベント名>, callback) でイベントを検知(=データの受信)

<br/>
<br/>

## 使用した外部サービス
なし

<br/>
<br/>

## 他
- jqueryは覚えなくていい
- 詳細はコメント入れておいたのでコード参照
