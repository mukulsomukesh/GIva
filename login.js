document.querySelector("form").addEventListener("submit", loginFun);

var regdUsers = JSON.parse(localStorage.getItem("userCred"));
console.log(regdUsers);

function loginFun() {
  event.preventDefault();

  var enteredEmail = document.querySelector("#email").value;
  var enteredPass = document.querySelector("#pass").value;
  //console.log(email, pass);

  // var temp=enteredEmail;
  var flag = false;

  regdUsers.map(function (elem) {

    if (elem.email == enteredEmail && elem.password == enteredPass) {
      alert("login success");
      flag = true;
      window.location.href = "my_account.html";

    }
  });

  if (flag == false) {
    alert("Please adjust the following : Incorrect email or password.");
    window.location.href = "login.html";
    
  }

}
