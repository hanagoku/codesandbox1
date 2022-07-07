import "./styles.css";
const onClickAdd = () => {
  //変数で入力した値を受け取る
  const inputText = document.getElementById("add-text").value;
  //inputtextの内容を初期化する
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};
//未完了のリストに追加する関数
const createIncompleteList = (text) => {
  //DOM生成して、divタグ生成
  const di = document.createElement("div");
  di.className = "list-row";
  //li要素生成,入力した値をli要素の中に設定する
  const li = document.createElement("li");
  li.innerText = text;
  //未完了のリストに追加する時にリストが出力されるようにdiv要素を子要素に設定する
  document.getElementById("incomplete-list").appendChild(di);
  console.log(di);
  //完了・削除ポタんの生成,ボタンクリック時にイベントを発生させ中の処理を行う(関数は似た用途で使用するときに処理をまとめる)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    //buttonタグ生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //押された戻すボタンの親タグDIVを完了リストから削除
      const deleteTarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //未完了に移動
      //テキスト取得
      const text = backbutton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
      console.log(text);
    });
    //divタグ以下を初期化したためもう一度子要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  //押された削除ボタンの親タグを未完了リストから削除するのにまず親タグを取得
  //未完了の配下にあるdiv事削除することができる（要素を指定しての削除が可能）
  //const deleteTaret =deleteButton.parentNode
  //document.getElementById("incomplete-list").removeChild(deleteTaret);
  //div,li.bottun階層構造設定する
  di.appendChild(li);
  di.appendChild(completeButton);
  di.appendChild(deleteButton);
};
//未完了リストから指定の要素を削除、関数としてまとめる
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
