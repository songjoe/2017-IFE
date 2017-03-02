(function() {
  var que = document.getElementById("que");
  var inp = document.getElementById("inp");
  var leftIn = document.getElementById("left-in");
  var rightIn = document.getElementById("right-in");
  var leftOut = document.getElementById("left-out");
  var rightOut = document.getElementById("right-out");

  leftIn.addEventListener("click",leftIN,false);
  function leftIN() {
    var li = document.createElement("li");
    li.innerHTML = inp.value;
    que.insertBefore(li,que.childNodes[0]);
  }
  rightIn.addEventListener("click",rightIN,false);
  function rightIN() {
    var li = document.createElement("li");
    li.innerHTML = inp.value;
    que.appendChild(li,que.childNodes[0]);
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
  
})();
