var firebaseConfig = {
  apiKey: "AIzaSyA755KyDof_KjvV2ZdmLyulKJft9K5ZO4c",
  authDomain: "kwitter-84e3c.firebaseapp.com",
  databaseURL: "https://kwitter-84e3c-default-rtdb.firebaseio.com",
  projectId: "kwitter-84e3c",
  storageBucket: "kwitter-84e3c.appspot.com",
  messagingSenderId: "35780906811",
  appId: "1:35780906811:web:45053a2423d02b3d26311e",
  measurementId: "G-NDZ1NVRLWY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function saveUsername() {
  username = document.getElementById("user_name").value;
  firebase.database().ref("/").child(username).update({
    purpose: "adding user",
  });
}
