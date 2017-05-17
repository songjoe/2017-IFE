
	function execution(){
		var order = document.getElementById("move").value;
		var box = document.getElementById("box");
		var boxHead = document.getElementById("box-head");
		var boxBody = document.getElementById("box-body");
		var headTop = boxHead.getBoundingClientRect().top;
		var bodyTop = boxBody.getBoundingClientRect().top;
		var headLeft = boxHead.getBoundingClientRect().left;
		var bodyLeft = boxBody.getBoundingClientRect().left;

	//	alert(headTop);alert(bodyTop);alert(headLeft);alert(bodyLeft);
		if(order == "GO"){
			if(headTop < bodyTop){
				var top = parseInt(box.style.top) - 41;
				if(top > 124){
					box.style.top = top + "px";
				}else {
					alert('不能超出边界');
				}
			}else if(headTop > bodyTop){
				var top = parseInt(box.style.top) + 41;
				if(top < 523){
					box.style.top = top + "px";
				}else {
					alert('不能超出边界');
				}
			}else if(headLeft > bodyLeft){
				var left = parseInt(box.style.left) + 40;
				if(left < 710){
					box.style.left = left + "px";	
				}else {
					alert('不能超出边界');
				}
			}else{
				var left = parseInt(box.style.left) - 40;
				if(left > 300){
					box.style.left = left + "px";	
				}else {
					alert('不能超出边界');
				}
			}
		}
		if(order == "TUN LEF"){
			if(headTop < bodyTop){
				box.style.transform = "rotate(270deg)";
			}else if(headTop > bodyTop){
				box.style.transform = "rotate(90deg)";
			}else if(headLeft < bodyLeft){
				box.style.transform = "rotate(180deg)";
			}else{
				box.style.transform = "rotate(0deg)";
			}
		}
		if(order == "TUN RIG"){
			if(headTop < bodyTop){
				box.style.transform = "rotate(90deg)";
			}else if(headTop > bodyTop){
				box.style.transform = "rotate(270deg)";			
			}else if(headLeft < bodyLeft){
				box.style.transform = "rotate(0deg)";
			}else{
				box.style.transform = "rotate(180deg)";
			}
		}
		if(order == "TUN BAC"){
			if(headTop < bodyTop){
				box.style.transform = "rotate(180deg)";
			}else if(headTop > bodyTop){
				box.style.transform = "rotate(0deg)";		
			}else if(headLeft < bodyLeft){
				box.style.transform = "rotate(90deg)";				
			}else{
				box.style.transform = "rotate(270deg)";
			}
		}
	}
		box.style.top= '219px';
		box.style.left= '405px';
	function init(){
		document.getElementById("btn").onclick = execution;
	}

	init();
