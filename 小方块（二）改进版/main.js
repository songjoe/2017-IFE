$(function(){
	var orderText = $(".order_text>p"),
		moveText = $("#move"),
		btnMove = $("#btn"),
		moveBox = $("#box"),
		flag = 0;
	orderText.click(function() {
			$this = $(this);
			moveText.val($this.text());
	});
	btnMove.click(function() {
		if(moveText.val() == "TRA LEF" && moveBox.position().left > 0) {
			if($("#box:animated").length==0){
				moveBox.animate({
					left: "-=45px"
				}, 1000);
			}
			
		}else if(moveText.val() == "TRA TOP" && moveBox.position().top > 0) {
			if($("#box:animated").length==0){
				moveBox.animate({
					top: "-=45px"
				}, 1000);
			}	
		}else if(moveText.val() == "TRA RIG" && moveBox.position().left < 405) {
			if($("#box:animated").length==0){
				moveBox.animate({
					left: "+=45px"
				}, 1000);
			}
		}
		else if(moveText.val() == "TRA BOT" && moveBox.position().top < 405) {
			if($("#box:animated").length==0){
				moveBox.animate({
					top: "+=45px"
				}, 1000);
			}
		}else if(moveText.val() == "MOV LEF" && moveBox.position().left > 0) {
			moveBox.transition({ 
				rotate: '-90deg' 
			});
			if($("#box:animated").length==0){	
				moveBox.animate({
					left: "-=45px"
				}, 1000);
			}
		}else if(moveText.val() == "MOV TOP" && moveBox.position().top > 0) {
			moveBox.transition({ rotate: '0deg' });
			if($("#box:animated").length==0){
				moveBox.animate({
					top: "-=45px"
				}, 1000);
			}
		}else if(moveText.val() == "MOV RIG" && moveBox.position().left < 405) {
			moveBox.transition({ rotate: '90deg' });
			if($("#box:animated").length==0){
				moveBox.animate({
					left: "+=45px"
				}, 1000);
			}
		}
		else if(moveText.val() == "MOV BOT" && moveBox.position().top < 405) {
			moveBox.transition({ rotate: '180deg' });
			if($("#box:animated").length==0){
				moveBox.animate({
					top: "+=45px"
				}, 1000);
			}
		}
	})
})