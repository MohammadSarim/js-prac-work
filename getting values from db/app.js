

function submit(){

// var db = firebase.database();
// var ref = db.ref('test').child('forGetting');
var myInput = document.getElementById('myInput').value;
var f_name = document.getElementById('f_name ').value;

var btn = document.getElementById('btn');
var obj = {
     name:myInput ,
    fName: f_name
}
firebase.database().ref('k').push(obj);

}

// print data
    firebase.database().ref("k").once("value").then(function (data) {
        var postObject = data.val();
        console.log(postObject);
        var keys = Object.keys(postObject);
                console.log(postObject)
        var div = document.getElementById("data");
        var ul = document.createElement("UL");
        div.appendChild(ul);
        
        var li;
        for (let i = 0; i < keys.length; i++) {
          var currentObj = postObject[keys[i]];
          if (i == 0) {
             li = document.createElement("LI");
        //  aaa.setAttribute("class", "col s4");
            ul.appendChild(li);
          }
          li.innerHTML = "Name " + currentObj.name
        
          
        }
          });    

