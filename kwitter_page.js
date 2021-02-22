//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDMvsyylwXCnjWnCgyll05UCm1-1WRyom0",
      authDomain: "kwitter2-38760.firebaseapp.com",
      databaseURL: "https://kwitter2-38760-default-rtdb.firebaseio.com",
      projectId: "kwitter2-38760",
      storageBucket: "kwitter2-38760.appspot.com",
      messagingSenderId: "524896564691",
      appId: "1:524896564691:web:1d15384b0672be7134eb26"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name");
roomname = localStorage.getItem("roomname");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,message:msg,like:0
      });
      document.getElementById("msg").value = "";
}