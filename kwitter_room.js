
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML = "welcome " + username + "!";
function addroom() {
      roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({ purpose: "adding a room" });
      console.log("added" + roomname);
      localStorage.setItem("roomname", roomname);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("roomname" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name) {
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}
