// var array = ['1', '2', '3','4']

// var flag = 0;
// var timer;

// document.getElementById('img').style.backgroundImage = "url(" +"./img/"+ array[3] + ".png" + ")"
// function images(){
    
//     if (flag === array.length) {
//         flag = 0
//         // console.log(flag)
//         document.getElementById('img').style.backgroundImage = "url(" +"./img/"+ array[flag] + ".png" + ")"
//     }    
//     else{
//         document.getElementById('img').style.backgroundImage = "url(" +"./img/"+ array[flag] + ".png" + ")";
//         // console.log(flag)
//     }
// }
// // }
// timer = setInterval(() => {
//     flag++
//     images()
// }, 3000)


function signUp(){
    let email = document.getElementById('email').value;


    if(email.match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')){
        swal({
            title: "Sign Up!",
            text: "Authentication!",
            icon: "success",
          });
    }else{
        swal({
            title: "Sign Up!",
            text: "Authentication Field!",
            icon: "warning",
          });
    }
    
}


function a(){
    swal("Hello world!");
}