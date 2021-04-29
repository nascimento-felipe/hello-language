let requestXML = new XMLHttpRequest();
var endpoint = "http://ip-api.com/json/?fields=status,message,query";

let username = "";

requestXML.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(this.responseText);

    if (response.status !== "success") {
      console.log("query failed: " + response.message);
      return;
    }

    console.log(response.query);
    fetch(`https://fourtonfish.com/hellosalut/?ip=${response.query}`)
      .then(function (responseHello) {
        return responseHello.json();
      })
      .then(function (json) {
        console.log(json);
        document.querySelector("#hello-p").innerHTML = `${
          json.hello + " " + username
        }, you have successfully logged in!`;
      });
  }
};

document
  .querySelector("#button-submit")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name");
    const password = document.querySelector("#password");

    if (name.value == "" || password.value == "") {
      if (name.value == "" && password.value != "") {
        password.style.borderColor = "";
        name.style.borderColor = "red";
        return alert("Hey, name field is empty...");
      } else if (name.value != "" && password.value == "") {
        name.style.borderColor = "";
        password.style.borderColor = "red";
        return alert("Hey, password field is empty...");
      } else {
        name.style.borderColor = "red";
        password.style.borderColor = "red";
        return alert("Hey, both fields are empty!");
      }
    } else {
      name.style.borderColor = "";
      name.style.borderColor = "";
      document.querySelector("#welcome-message").className = "texto-welcome";

      username = name.value;

      requestXML.open("GET", endpoint, true);
      requestXML.send();

      return;
    }
  });

document
  .querySelector("#button-logout")
  .addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(
      "#hello-p"
    ).innerHTML = `Have a great day, ${username}!`;

    document.querySelector("#name").value = "";
    document.querySelector("#password").value = "";
  });
