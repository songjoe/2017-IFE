(function() {
  var que = document.getElementById("que");
  var inp = document.getElementById("inp");
  var leftIn = document.getElementById("left-in");
  var rightIn = document.getElementById("right-in");
  var leftOut = document.getElementById("left-out");
  var rightOut = document.getElementById("right-out");
  var sortUp = document.getElementById("sort-up");
  var n = 0;
  leftIn.addEventListener("click",leftIN,false);
  function leftIN() {
    if(inp.value <= 100 && inp.value >= 10 && n <= 60){
      var li = document.createElement("li");
      li.style.height = inp.value + "px";
      que.insertBefore(li,que.childNodes[0]);
      n++;
    }
    else if(n > 60) {
      alert("The queue is too long !");
    }
    else {
      alert("Please input the number between 10 to 100 !")
    }
  }

  rightIn.addEventListener("click",rightIN,false);
  function rightIN() {
    if(inp.value <= 100 && inp.value >= 10 && n <= 60){
      var li = document.createElement("li");
      li.style.height = inp.value + "px";
      que.appendChild(li,que.childNodes[0]);
      n++;
    }
    else if(n > 60) {
      alert("The queue is too long !");
    }
    else {
      alert("Please input the number between 10 to 100 !")
    }
    
  }

  leftOut.addEventListener("click",leftOUT,false);
  function leftOUT() {
    if(que.firstChild){
      alert(parseInt(que.firstChild.style.height));
      que.firstChild.remove();
      n--;
    }
  }

  rightOut.addEventListener("click",rightOUT,false);
  function rightOUT() {
    if(que.lastChild){
      alert(parseInt(que.lastChild.style.height));
      que.lastChild.remove();
      n--;
    }
  }
  

  sortUp.addEventListener("click",sortUP,false);
  function sortUP() {
    var c = que.childNodes;
    var tmp = 0;
    var i;
    var j;
    for(j = 0; j < c.length -1; j++) {
      for(i = 0; i < c.length - 1; i++) {
        if (c[i].style.height >　c[i+1].style.height){
          tmp = c[i].style.height;
          c[i].style.height = c[i+1].style.height;
          c[i+1].style.height = tmp;
        }
      }
    }
  }

})();