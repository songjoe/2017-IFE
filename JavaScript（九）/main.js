(function() {
    var pre = document.getElementById("pre");
    var last = document.getElementById("last");
    var preSea = document.getElementById("preSearch");
    var lastSea = document.getElementById("lastSearch");
    var flex1 = document.getElementById("flex1");
    var inp = document.getElementById("inp");
    var list = [];
    var j = 0;
    var flag = 0;
    var perm = 0;
    var timer;

    function preOrder(node) {
        var i;
        if(node != null){
            list.push(node);
            var length = node.children.length;
            if(length > 0){
                for(i = 0; i < length; i++){
                    if(node.children[i].nodeType == 1){
                        preOrder(node.children[i]);
                    }
                }
            }
        }
    }
    function lastOrder(node) {
        var i;
        if(node != null){
            //list.push(node);
            var length =node.children.length;
            if(length == 0){
                list.push(node);
            }
            if(length > 0){
                for(i = 0; i < length; i++){
                    if(node.children[i].nodeType == 1){
                        lastOrder(node.children[i]);
                        
                    }
                }list.push(node);
            }
        }
    }
    function show() {
        if(list[j]){
            var con = list[j].firstChild.nodeValue.replace(/(^\s*)|(\s*$)/g, "");
        }
        var t = 0;
        if(j != 0 && !perm){
            list[j-1].style.backgroundColor = "white";
        }
        if(j != list.length){
            list[j].style.backgroundColor = "blue";
            perm = 0;
            if(inp.value ==  con && con && flag) {
                list[j].style.backgroundColor = "red";
                t = 1;
                perm = 1;
            }
        }
        
        j = j + 1;
        if(j == list.length + 1){
            if(!t){
                alert("no find!");
            }
            clearInterval(timer);
            list = [];
            j = 0;
        }
    }


    pre.addEventListener("click",xianxu,false);
    function xianxu() {
        flag = 0;
        preOrder(flex1);
        timer = setInterval(show,500);
    }

    last.addEventListener("click",houxu,false);
    function houxu() {
        flag = 0;
        lastOrder(flex1);
        timer = setInterval(show,500);
    }

    preSea.addEventListener("click",preSeac,false);
    function preSeac() {
        flag = 1;
        preOrder(flex1);
        timer = setInterval(show,500);
    }

    lastSea.addEventListener("click",lastSeac,false);
    function lastSeac() {
        flag = 1;
        lastOrder(flex1);
        timer = setInterval(show,500);
    }
    
        //点击相应的box背景变色
    var selectDiv;//记录选中的box
    var levels = document.getElementById("cont").getElementsByTagName('div');
    for (var i = 0; i < levels.length; i++) {
        levels[i].onclick = function(e) {
            clearResult();
            this.style.backgroundColor = '#fef9d1';
            e.stopPropagation();//阻止事件冒泡
            selectDiv = this;
        };
    }
    function clearResult() {
        var allDiv = document.getElementsByTagName('div');
        for (var i = 0; i < allDiv.length; i++) {
            allDiv[i].style.backgroundColor = '#fff';
        }
    }
    //删除选中box及其子节点
    document.getElementById('delete-btn').onclick  = function(){
        if(selectDiv === undefined){
            alert('请先选中要删除的节点');
        }else{
            var parent = selectDiv.parentNode;
            parent.removeChild(selectDiv);
        }
    };

    //在选中节点下增加子节点
    document.getElementById('insert-btn').onclick = function(){
        var content = document.getElementById('insert-txt').value;

        if(content === ''){
            alert('请填写新增节点的内容');
        }else if(selectDiv === undefined){
            alert('请先选中要操作的节点');
        }else{

            var newDiv = document.createElement('div');
            newDiv.innerHTML = content;
            newDiv.className = 'level-';
            selectDiv.appendChild(newDiv);

            //更新点击事件
            levels = document.getElementById('box-container').getElementsByTagName('div');
            for (var i = 0; i < levels.length; i++) {
                levels[i].onclick = function(e) {
                    clearResult();
                    this.style.backgroundColor = '#fef9d1';
                    e.stopPropagation();//阻止事件冒泡
                    selectDiv = this;
                };
            }
        }
    }

    


})();