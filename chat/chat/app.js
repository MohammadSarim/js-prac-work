// function input  (){
// var input = document.getElementById('input').value;
// var t = document.getElementById('btn').addEventListener('click', function(){
//     var list = document.getElementById('list');
//     var newList = document.createElement('Li');
//     var node = document.createTextNode(input)
//     // newList.setAttribute('id' , 'childList' );
//     list.appendChild(node);

    

//     // firebase.database().ref('chat/').push(input)

// })

function send(){
    var input = document.getElementById('input').value;
    var list  = document.getElementById('list')
    var cList = document.createElement('li');
    var n = document.createTextNode(input);

    list.appendChild(cList)
    var nn =  cList.appendChild(n);
    firebase.database().ref('/').child('value').push(input);
    document.getElementById('input').value = '';

}