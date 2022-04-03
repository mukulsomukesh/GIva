var regdUsers = JSON.parse(localStorage.getItem("userCred")) || [];

function loginFun() {
  var enteredEmail = document.querySelector("#email").value;
  var enteredPass = document.querySelector("#pass").value;
  //console.log(email, pass);

  // var temp=enteredEmail;
  var flag = false;

  regdUsers.map(function (elem) {

    if (elem.email == enteredEmail && elem.password == enteredPass) {
      alert("login success");
      flag = true;
      localStorage.setItem("Display_name", elem.firstname);
      window.location.href="cart_Information.html";
    }
  });

  if (flag == false) {
    alert("Incorrect email or password.");
    window.location.href = "login.html";
    
  }

}