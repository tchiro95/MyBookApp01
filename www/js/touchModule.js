//touchに関するオブジェクト。それぞれの座標などを取得する。
//使う時はオブジェクトをつくること。
var touchModule = {
	StartYPoint:0,
	StartXPoint:0,
	EndYPoint:0,
	EndXPoint:0,
	differenceY:0,
	differenceX:0,
	usePCFLG : 1,
	usrsDevice:"",
	swipeDirection :"",
	noVmove : 1,
	target : "",
	

	setStartPosition : function(event){
		"use strict";
		if(event.changedTouches){
			this.StartYPoint = event.changedTouches[0].clientY;
			this.StartXPoint = event.changedTouches[0].clientX;
		}else{
			this.StartYPoint = event.clientY;
			this.StartXPoint = event.clientX;
		}
	},

	setEndPosition : function(event){
		"use strict";
		if(event.changedTouches){
			this.EndYPoint = event.changedTouches[0].clientY;
			this.EndXPoint = event.changedTouches[0].clientX;
		}else{
			this.EndYPoint = event.clientY;
			this.EndXPoint = event.clientX;
		}
		if(this.StartYPoint < this.EndYPoint){
			this.differenceY = this.EndYPoint - this.StartYPoint;
		} else{
			this.differenceY = this.StartYPoint - this.EndYPoint;
		}
		if(this.differenceY < 10){this.noVmove=1;}else{this.noVmove=0;} 

		this.differenceX = this.StartXPoint-this.EndXPoint;
		if(this.differenceX > 40){
			this.swipeDirection = "swipeleft";
		}else if(this.differenceX < -40){
			this.swipeDirection = "swiperight";
		}else{
			this.swipeDirection = "";
		}

		//swipeを感知したらファンクションを起動
		if(this.swipeDirection!=="undefined"){
			//一問一答は解説画面がでていたらスワイプ無効
			if(event.target.className === "pages"){
				this.swipeMoveQuiz();
				return;
			}
		}
	},
	
	swipeMoveQuiz : function (){
		"use strict";
		if(this.differenceY>30){
			return;
		}
		if(this.differenceX===0||this.swipeDirection===""){
			return;
		}else if(this.differenceX>0||this.swipeDirection!==""){
			document.getElementById("contentsWrapper").style.overflow="auto";
			this.swipeOK = 0;
			return;
		}
	}

};
