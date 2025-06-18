//  function login() {
//       let email = document.getElementById("loginEmail").value;
//       let password = document.getElementById("loginPassword").value;

//       let storedUser = localStorage.getItem(email);

//       if (!storedUser) {
//         alert("No account found with this email.");
//         return;
//       }

//       let user = JSON.parse(storedUser);

//       if (user.password === password) {
//         alert("Login successful");
//         window.location.href = "dashboard.html";
//       } else {
//         alert("Incorrect password");
//       }
//     }

// function login() {
//   let email = document.getElementById("loginEmail").value;
//   let password = document.getElementById("loginPassword").value;
//   let signPassword = localStorage.getItem(email, password);

//   if (signPassword.email === email && signPassword.password === password) {
//     localStorage.setItem("loggedInUser", email, password);
//     alert("Login successful! Redirecting...");
//     window.location.href = "dashboard.html";
//   } else {
//     alert("Invalid email or password.");
//   }
// }

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let storedUser = localStorage.getItem(email);

  if (storedUser) {
    let userData = JSON.parse(storedUser); // Convert from string to object

    if (userData.email === email && userData.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      alert("Login successful! Redirecting...");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid email or password.");
    }
  } else {
    alert("No account found with this email.");
  }
}
