window.onload = pageLoad;

function pageLoad(){
	var buttonStart = document.getElementById('start');
	buttonStart.onclick = startGame;
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; // 30 วินาที
	var x = document.getElementById('clock');
	timer = setInterval(timeCount,TIMER_TICK);
	
	function timeCount(){
		second = second - 1;
		x.innerHTML = second;
		var allbox = document.querySelectorAll("#squares-layer div");
		if(allbox.length <=0){ //กดกล่องครับเวลาหยุด
			alert("you win!!")
			clearScreen();
			clearInterval(timer);
			timer = null;
		}
		else if (second ==0){
			alert("you lose")
			clearInterval(timer)
			timer = null;
			clearScreen();
		}
		
	}
}

function addBox(){

	var numbox = document.getElementById('numbox').value;
	
	var squaresLayer = document.getElementById('squares-layer');
	var colorDrop = document.getElementById('color').value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement('div');
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.backgroundColor = colorDrop;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		squaresLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	var clickBox = document.getElementById('squares-layer'); // ลบกล่อง
	box.onclick = function () {
		clickBox.removeChild(box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#squares-layer div");
	var containerBox = document.getElementById('squares-layer');
	//delete all  squares
	for (var i=0;i<allbox.length;i++){
		containerBox.removeChild(allbox[i]);
	}
}




