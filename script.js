// Your Firebase configuration
const firebaseConfig = {
    
        apiKey: "AIzaSyCHXkKpJARcp4yOHl85OPJW1pSjIG7cPf4",
        authDomain: "data-64e03.firebaseapp.com",
        projectId: "data-64e03",
        storageBucket: "data-64e03.appspot.com",
        messagingSenderId: "523816020657",
        appId: "1:523816020657:web:d44938c3b1e1566f075090"
      };

  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  const submitButton = document.getElementById('submit');
  
  submitButton.addEventListener('click', () => {
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
  
    // Firebase Authentication (if applicable):
    // ... sign in or create user
  
    database.ref('users').push({
      name: userName,
      email: userEmail
    });
  
    window.location.href = "https://g.page/r/Caf4Eqd4wUINEB0/review";
  });
  