// document.getElementById("form").addEventListener("submit",    function (event) {
//     document.getElementById("username").innerHTML="";
//     document.getElementById("errorname").innerhtml="";
//     var name=document.getElementById("username").value;
//     if(name == "") {
//         document.getElementById("errorname").innerHTML="Name is Required"
//         event.preventDefault();
//     }
// });




document.getElementById("form").addEventListener("submit", function (event) {
    document.getElementById("username").innerHTML = "";
    document.getElementById("errorname").innerHTML = "";
    var name = document.getElementById("username").value;
    if (name == "") {
      document.getElementById("errorname").innerHTML = "Name Is  Required";
      event.preventDefault();
    }
   
    document.getElementById("password").innerHTML = "";
    document.getElementById("errorpassword").innerHTML = "";
    var password = document.getElementById("password").value;
    if (password == "") {
      document.getElementById("errorpassword").innerHTML =
        "Password Is Required";
      event.preventDefault();
    }
  });




  // const form = document.querySelector('#form');
  // const username = document.querySelector('#username');
  // const password = document.querySelector('#password')

  // form.addEventListener('submit',(e)=>){
  //   e.preventDefault();
  //   ValiditeInputs();
  // }