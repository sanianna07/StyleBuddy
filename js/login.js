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

// Get Firebase Auth instance
const auth = firebase.auth();

// Login form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in user with email and password
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('User signed in:', user);
        // Redirect to home page or perform other actions
        window.location.href = 'home.html';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login error:', errorMessage);
        // Handle login error (e.g., display error message)
    });
});
