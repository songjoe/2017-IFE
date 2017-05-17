(function() {
    var pre = document.getElementById("pre");
    var last = document.getElementById("last");
    var flex1 = document.getElementById("flex1");
    var list = [];
    var j = 0;
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
        if(j != 0){
            list[j-1].style.backgroundColor = "white";
        }
        if(j != list.length){
            list[j].style.backgroundColor = "blue";
        }
        j = j + 1;
        if(j == list.length + 1){
            clearInterval(timer);
            list = [];
            j = 0;
        }
    }
    pre.addEventListener("click",xianxu,false);
    function xianxu() {
         preOrder(flex1);
         timer = setInterval(show,500);
    }
    last.addEventListener("click",houxu,false);
    function houxu() {
         lastOrder(flex1);
         timer = setInterval(show,500);
    }
})();