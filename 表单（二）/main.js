window.onload = function() {
	var aInput = document.getElementsByTagName('input');
	var oName = aInput[0];
	var oPsw = aInput[1];
	var oPsw2 = aInput[2];
	var oEml = aInput[3];
	var oPhone = aInput[4];

	var aP = document.getElementsByTagName('p');
	var name_msg = aP[0];
	var psd_msg = aP[1];
	var psw2_msg = aP[2];
	var eml_mag = aP[3];
	var phone_msg = aP[4];

	var bSub = document.getElementById('sub');

	var flag_name = 0;
	var psw_name = 0;
	var psw2_name = 0;
	var eml_name = 0;
	var phone_name = 0;

	//用户名
	oName.onfocus = function() {
		name_msg.style.display = 'block';
		name_msg.innerHTML = '必填，长度为4~16个字符';
		name_msg.style.color = '#ccc';
	}
	oName.onblur = function() {
		if(oName.value.length == 0){
			name_msg.innerHTML = '名称不能为空';
			name_msg.style.color = 'red';
			flag_name = 0;
		}
		else if(oName.value.length < 4){
			name_msg.innerHTML = '长度不能小于4';
			name_msg.style.color = 'red';
			flag_name = 0;
		}
		else if(oName.value.length > 16){
			name_msg.innerHTML = '长度不能大于16';
			name_msg.style.color = 'red';
			flag_name = 0;
		}
		else  {
			name_msg.innerHTML = '名称可用';
			name_msg.style.color = 'green';
			flag_name = 1;
		}
	}

	//密码
	oPsw.onfocus = function() {
		psw_msg.style.display = 'block';
		psw_msg.innerHTML = '请输入密码，长度为6~16个字符';
		psw_msg.style.color = '#ccc';
	}
	oPsw.onblur = function() {
		if(oPsw.value.length == 0){
			psw_msg.innerHTML = '密码不能为空';
			psw_msg.style.color = 'red';
			psw_name = 0;
		}
		else if(oPsw.value.length < 6){
			psw_msg.innerHTML = '密码长度不能小于6';
			psw_msg.style.color = 'red';
			psw_name = 0;
		}
		else if(oPsw.value.length > 16){
			psw_msg.innerHTML = '密码长度不能大于16';
			psw_msg.style.color = 'red';
			psw_name = 0;
		}
		else  {
			psw_msg.innerHTML = '密码可用';
			psw_msg.style.color = 'green';
			psw_name = 1;
		}
	}

	//检查密码
	oPsw2.onfocus = function() {
		psw2_msg.style.display = 'block';
		psw2_msg.innerHTML = '重复密码';
		psw2_msg.style.color = '#ccc';
	}
	oPsw2.onblur = function() {
		if(oPsw2.value == oPsw.value){
			psw2_msg.innerHTML = '两次密码一致';
			psw2_msg.style.color = 'green';
			psw2_name = 1;
		}
		else {
			psw2_msg.innerHTML = '两次密码不一致';
			psw2_msg.style.color = 'red';
			psw2_name = 0;
		}
	}

	//电子邮箱
	oEml.onfocus = function() {
		eml_msg.style.display = 'block';
		eml_msg.innerHTML = '请输入你的联系邮箱';
		eml_msg.style.color = '#ccc';
	}
	oEml.onblur = function() {
		var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
		if(reg.test(oEml.value)){
			eml_msg.innerHTML = '电子邮箱填写正确';
			eml_msg.style.color = 'green';
			eml_name = 1;
		}
		else if(oEml.value == 0){
			eml_msg.innerHTML = '电子邮箱不能为空';
			eml_msg.style.color = 'red';
			eml_name = 0;
		}
		else {
			eml_msg.innerHTML = '电子邮箱格式错误';
			eml_msg.style.color = 'red';
			eml_name = 0;
		}
	}

	//手phone
	oPhone.onfocus = function() {
		phone_msg.style.display = 'block';
		phone_msg.innerHTML = '请输入你的手机号码';
		phone_msg.style.color = '#ccc';
	}
	oPhone.onblur = function() {
		var reg2 = /^1[34578]\d{9}$/ ;
		if(reg2.test(oPhone.value)){
			phone_msg.innerHTML = '手机号码填写正确';
			phone_msg.style.color = 'green';
			phone_name = 1;
		}
		else if(oPhone.value == 0){
			phone_msg.innerHTML = '手机号码不能为空';
			phone_msg.style.color = 'red';
			phone_name = 0;
		}
		else {
			phone_msg.innerHTML = '手机号码格式错误';
			phone_msg.style.color = 'red';
			phone_name = 0;
		}
	}

	//按钮
	bSub.onclick = function(){
		if(flag_name && psw_name && psw2_name && eml_name &&phone_name){
			alert('OK');
		}
		else {
			alert('输入有误');
		}
	}
}