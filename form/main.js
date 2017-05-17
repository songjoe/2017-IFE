window.onload = function() {
	var tInput = document.getElementById("name");
	var bCheck = document.getElementById("check");
	var nameMsg = document.getElementById("name_msg");
	//正则表达式
	var re = /\w(4,16)/g;

	bCheck.addEventListener("click", fCheck, false);
	function fCheck() {
		var l = tInput.value.length;
		//长度小于4
		if(l < 4 && l > 0) {
			nameMsg.innerHTML = '长度小于4';
			tInput.style.borderColor = 'red';
			nameMsg.style.color = 'red';
		}
		//长度大于16
		else if(l >16) {
			nameMsg.innerHTML = '长度大于16';
			tInput.style.borderColor = 'red';
			nameMsg.style.color = 'red';
		}
		//长度为0
		else if(l == 0) {
			nameMsg.innerHTML = '姓名不能为空';
			tInput.style.borderColor = 'red';
			nameMsg.style.color = 'red';
		}
		else {
			nameMsg.innerHTML = '名称格式正确';
			tInput.style.borderColor = 'green';
			nameMsg.style.color = 'green';
		}
	}


}
