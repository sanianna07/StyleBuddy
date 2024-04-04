

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVUUMKhAi2K8RTQacOPxbqDRLH1s6CVPk",
    authDomain: "style-buddy-a5d37.firebaseapp.com",
    projectId: "style-buddy-a5d37",
    storageBucket: "style-buddy-a5d37.appspot.com",
    messagingSenderId: "797042972303",
    appId: "1:797042972303:web:ddf7cc5da480cd3ac082fa",
    measurementId: "G-RW8XBYLT2J"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in successfully, redirect to home page
        window.location.href = 'home.html';
      })
      .catch((error) => {
        // Handle login errors
        console.error('Login error:', error.message);
      });
  }