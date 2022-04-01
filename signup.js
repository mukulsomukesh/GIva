document.querySelector("form").addEventListener("submit", CreateAccFun);

var userData = JSON.parse(localStorage.getItem("userCred"))||[]

function CreateAccFun() {
  event.preventDefault();

  var userObj = {
    firstname: document.querySelector("#firstname").value,
    lastname: document.querySelector("#lastname").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#pass").value
  };
  // console.log(userObj);
  userData.push(userObj);
  alert("Account Created Successfully!");
  window.location.href = "login.html";

  localStorage.setItem("userCred", JSON.stringify(userData));
 
}
