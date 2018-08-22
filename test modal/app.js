document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var options = M.Modal.init(elems, options);
    document.getElementById("test").addEventListener("click", function(){
console.log("pressed");
var a = document.getElementById("modal1")
var instance = M.Modal.getInstance(a);
instance.open();

    })


  });

// function test(){
  
//     var btn = document.getElementById("test");
//     var options = M.Modal.open(btn, options);
  
// }