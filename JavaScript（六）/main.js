(function() {
  var que = document.getElementById("que");
  var inp = document.getElementById("inp");
  var sea = document.getElementById("search");
  var find = document.getElementById("find");
  var leftIn = document.getElementById("left-in");
  var rightIn = document.getElementById("right-in");
  var leftOut = document.getElementById("left-out");
  var rightOut = document.getElementById("right-out");
  var a = [];
  var b = "";
  leftIn.addEventListener("click",leftIN,false);
  function leftIN() {
    b = inp.value.replace(/[^0-9a-zA-z\u4e00-\u9fa5?]/gmi," ")
    a = b.split(" ");
    var i;
    for(i = 0; i < a.length; i++){
      var li = document.createElement("li");
      li.innerHTML = a[i];  
      que.insertBefore(li,que.childNodes[0]);
    }
  }
  rightIn.addEventListener("click",rightIN,false);
  function rightIN() {
    b = inp.value.replace(/[^0-9a-zA-z\u4e00-\u9fa5?]/gmi," ")
    a = b.split(" ");
    var i;
    for(i = 0; i < a.length; i++){
      var li = document.createElement("li");
      li.innerHTML = a[i];  
      que.appendChild(li,que.childNodes[0]);
    }
  }
  leftOut.addEventListener("click",leftOUT,false);
  function leftOUT() {
    if(que.firstChild){
      alert(que.firstChild.innerHTML);
      que.firstChild.remove();
    }
  }
  rightOut.addEventListener("click",rightOUT,false);
  function rightOUT() {
    if(que.lastChild){
      alert(que.lastChild.innerHTML);
      que.lastChild.remove();
    }
  }
  find.addEventListener("click",finD,false);
  function finD() {
    var q = que.childNodes;
    //alert(q.length);
    var s = sea.value;
    var re = new RegExp(s,"gim");
    var i;
    //alert(s);
    for(i = 0; i< q.length; i++){
      if(re.test(q[i].innerHTML)){
        q[i].style.color = "blue";
      }
    }
  }
  
})();