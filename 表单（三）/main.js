
window.onload = function() {
	var study = document.getElementById("studying");
	var la = document.getElementById("la");
	var work = document.getElementById("working");
	var city = document.getElementById("city");
	var school = document.getElementById("school");
	var add = document.getElementById("wAdd");
	var flag = '';
	function checking() {
		if(study.checked == true) {
			la.style.display = 'inline-block';
			city.style.display = 'inline-block';
			school.style.display = 'inline-block';
			add.style.display = 'none'; 
			var index = city.selectedIndex;
			var val = city.options[index].value;
			switch(val) {
				case 'beijing':
					if(flag != 'bj'){
						school.innerHTML = '<option value="beida">北京大学</option><option value="qinghua">清华大学</option>';
						flag = 'bj';
						
					}break;
				case 'shanghai':
					if(flag != 'sh'){
						school.innerHTML = '<option value="beida">复旦大学</option><option value="qinghua">交通大学</option>';
						flag = 'sh';
						
					}break;
				case 'hangzhou':
					if(flag != 'hz'){
						school.innerHTML = '<option value="beida">浙江大学</option><option value="qinghua">浙江工商大学</option>';
						flag = 'hz';
						
					}break;
			}
		}
		else if(work.checked == true) {
			la.style.display = 'none';
			city.style.display = 'none';
			school.style.display = 'none';
			add.style.display = 'inline-block'; 
		}
	}
	var timer = setInterval(checking,100);
	
}