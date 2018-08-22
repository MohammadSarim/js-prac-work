/* Registration Process */

function signup() {
    var name = document.getElementById("name");
    var number = document.getElementById("number");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (!email.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        swal({
            title: "Warning!",
            text: "Please enter you email address. example@gmail.com",
            icon: "warning",
        });
    }
    if (name.value === '' || name.value === " ") {
        swal({
            title: "Warning!",
            text: "Please enter you name.",
            icon: "warning",
        });
    }
    else if (password.value.length < 6) {
        swal({
            title: "Warning!",
            text: "Please enter atleast 6 characters in password field",
            icon: "warning",
        });
    }
    else {
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then(function (user) {
                user.sendEmailVerification();
                // console.log(user.uid);
                localStorage.setItem("user", user.uid)
                var obj = {
                    username: name.value,
                    email: email.value,
                    phoneNumber: number.value,
                    uid: user.uid
                    // emailVerified: result.emailVerified
                };
                firebase.database().ref("/users/" + user.uid).set(obj);
                setTimeout(() => {
                    name.value = "";
                    number.value = "";
                    email.value = "";
                    password.value = "";
                    swal({
                        title: "Success!",
                        text: "Account has been register and verification link has been sent to " + user.email,
                        icon: "success",
                    });
                    location = 'index.html';
                    console.log(user)
                }, 1000);
            })
            .catch(function (error) {
                console.log(error, error.message);
            });
    }
}

function login() {
    var userEmail = document.getElementById("userEmail");
    var userPass = document.getElementById("userPassword");

    firebase.auth().signInWithEmailAndPassword(userEmail.value, userPass.value)
        .then(function (result) {
            swal({
                title: "Success!",
                text: "You're logged in successfully",
                icon: "Suceess",
            });
            userEmail.value = "";
            userPass.value = "";
            console.log(result.uid);
            setTimeout(() => {
                // window.location = "home.html";
            }, 1000);
        })
        .catch(function (error) {
            console.log(error, error.message);
            swal({
                title: "Error Occurred!",
                text: error.message,
                icon: "error",
            });
        });
}


function logOut() {
    firebase.auth().signOut()
        .then(function (resolve) {
            // window.location.replace("index.html");
            console.log("Succesfully Signed-Out", resolve);
            swal({
                title: "Success!",
                text: "Successfully signed out",
                icon: "success",
            });
        })
        .catch(function (err) {
            console.log("Error", err);
            swal({
                title: "Error Occurred!",
                text: err.message,
                icon: "error",
            });
        })
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        
        console.log(user.uid);
        console.log(user.email);
        $("#logout").show();
        $("#signup").hide();
        $("#login").hide();
        // $("#").show();
    } else {
        console.log("Please login!..");
        // $("#verify").hide();
        $("#logout").hide();
        $("#signup").show();
        $("#login").show();
    }
});

/* Registration End */

