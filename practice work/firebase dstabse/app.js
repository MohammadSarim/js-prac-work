function saveData(){
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var obj = {
        one: imran,
        two: khan,
        three: 333,
    };
    
    one.value=null;
    two.value =null;
    three.value= null;
    firebase.database().ref('database').child('Value').push(obj);
}
firebase.database().ref("database").child("tt").on("value",(obj) =>{
    document.getElementById("get1").innerHTML = obj.val().one
    document.getElementById("get2").innerHTML = obj.val().two
    document.getElementById("get3").innerHTML = obj.val().three
    })