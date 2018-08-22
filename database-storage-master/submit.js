// File
var fileBtn = document.getElementById('fileButton');
var progressBar = document.getElementById('uploader')
let adDetail = document.getElementById('addDetail');
let addTitle = document.getElementById('addTitle');
let addPrice = document.getElementById('addPrice');
let addNumber= document.getElementById('addNumber');


    fileBtn.addEventListener("change", function (e) {
        //   get a file
        var file = e.target.files[0];
        //   create a storage ref
        var storageRef = firebase.storage().ref("e_pics /" + file.name + e.uid);
        //   upload a file
        var uploadTask = storageRef.put(file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on("state_changed", // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progressBar.value = percentage;
                console.log('Upload is ' + percentage + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {

                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        console.log(error);
                        // User doesn't have permission to access the object
                        break;

                    case 'storage/canceled':
                        console.log(error);
                        // User canceled the upload
                        break;

                    case 'storage/unknown':
                        console.log(error);
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            }, function () {
                // Upload completed successfully, now we can get the download URL
                storageRef.getDownloadURL().then(function (url,uid) {
                
                var postKey = firebase.database().ref("Posts/" + "Data/").push().key;
                
                var updates = {};
                var postData = {
                        adTitle: addTitle.value,
                        adDetail: addDetail.value,
                        adPrice: addPrice.value,
                        phoneNumber: addNumber.value,
                        imgUrl: url,
                        user: firebase.auth().currentUser.uid
                        // user : url.user.uid
                    };
                    // addEventListener.on('value' , data , err)
                    // function data(){
                    //     console.log(data.value)
                    // }
                    // function err(){
                    //     console.log(err)
                    // }
                    console.log(uid)
                    updates["/Posts/" + "Data/" + postKey] = postData;
                    firebase.database().ref().update(updates);
                    // Insert url into an <img> tag to "download"
                    console.log(url);
                })
            });
    });