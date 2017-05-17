window.onload = function (){
	var oBtn = document.getElementById("popFloat"),
		oFloat = document.getElementById("float"),
		oMusk = document.getElementById("musk"),
		oBtnSu = document.getElementById("ensure"),
		oBtnCc = document.getElementById("cancel");
		flag = 0,
		remainT = oFloat.offsetTop;
		oFloat.style.display = "none";
		oMusk.style.display= "none";
		console.log(remainT);
	document.addEventListener('scroll', scrollFloat, false);
	function scrollFloat(){
		scrollT = window.scrollY;
		oMusk.style.top = scrollY + "px";
		oFloat.style.top = scrollY + remainT + "px";
		
	};
	oBtn.addEventListener("click",alertFloat,false);
	function alertFloat(e){
		e.stopPropagation();
		if(flag === 0){
			oFloat.style.display = "block";
			oMusk.style.display= "block";
			flag = 1;
		};	
	};
	document.addEventListener("click",alertHide,false);
	oBtnSu.addEventListener("click",alertHide,false);
	oBtnCc.addEventListener("click",alertHide,false);
	function alertHide(e){
		if(flag === 1){
			oFloat.style.display = "none";
			oMusk.style.display= "none";
			flag = 0;
		};
		e.stopPropagation();
	};
	oFloat.addEventListener("click",doNothing,false);
	function doNothing(e){
		e.stopPropagation();
	};
}