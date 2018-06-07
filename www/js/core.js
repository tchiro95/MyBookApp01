//ロードしたときに最初に読みに来るのは
//setMenuData
//なので、検索してジャンプしてください。

//capturePhase 上から下の要素にアクセス
document.body.addEventListener(mytap, function(event){
	"use strict";
	touchModule.setStartPosition(event);
	//バックボタンが押されたら
	document.addEventListener("backbutton",function(){
		checkHeaderMenu("backIcon");
	});

	//選択肢
	var targetObject = event.target;
	var id;
	/*タッチが移動した時にyの値をとってるんだけど、これが判定されると色々間違いが起こりそう。
	if(event.changedTouches){
		touchModule.StartYPoint = event.changedTouches[0].clientY;
	}else{
		touchModule.StartYPoint = event.clientY;
	}
	*/

}, true);

//bubbling 下から上
document.body.addEventListener(mytap, function(event){
	"use strict";
	//メニュー
	var id;
	var targetObject = event.target;

	//最初にタッチスタートの位置を取得します。
	touchModule.setStartPosition(event);

},false);

//スクロールを止める
var scrollObjClass =function(position) {
	"use strict";
	this.topPosition = position;
	//モーダルがひらいたときにスクロール位置を止める。止めるにはbodyにclassを付けるだけ。toppositionとかは現段階ではやらないでオーケー。
	var scrollNum;
	this.scrollLock = function(flg){
		if(flg){
			scrollNum = Number(this.topPosition);
			document.getElementById("wrapMain").style.position = "fixed";
			document.getElementById("wrapMain").style.overflowY = "hidden";

			//document.body.classList.add("modal-open");
		}else{
			scrollNum = Number(this.topPosition);
			document.getElementById("wrapMain").style.position = "absolute";
			document.getElementById("wrapMain").style.overflowY = "auto";
			//document.body.classList.remove("modal-open");
		}
	};
};

var scrollObj = new scrollObjClass(0);



//タップ終わりに反応 縦に動けば反応しないようにしてあります。
document.body.addEventListener(mytapend,function(event){
	"use strict";
	//縦移動のフラッグを入れながら終わりのポジションをセットします。
	//スワイプを感知したら問答無用でスワイプします。
	touchModule.setEndPosition(event);
	var id;

	//縦移動の動きがあればスルーしてチェックを終わらせます。
	if(!touchModule.noVmove){
		event.stopPropagation();
		return;
    }
    
	
},true);




//ロード時に設定を読み込む
function setMenuData(flg){
	"use strict";
}

