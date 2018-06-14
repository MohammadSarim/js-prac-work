var name = document.getElementById('name');
var password = document.getElementById("password");
function saveData(){
this.name = name;
this.password = password;   

var obj = {
    name: name.value,
    password: password.value,
  };


name.value=null;
password.value =null;
firebase.database().ref('login').child('Value').push(obj);
}