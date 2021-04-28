let requestXML = new XMLHttpRequest();
var endpoint = "http://ip-api.com/json/?fields=status,message,countryCode";

requestXML.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(this.responseText);

    if (response.status !== "success") {
      console.log("query failed: " + response.message);
      return;
    }

    if (response.countryCode == "US") {
      window.location.replace("https://google.com/");
    }
    if (response.countryCode == "CA") {
      window.location.replace("https://google.ca/");
    }
    if (response.countryCode == "BR") {
      window.location.replace("https://facebook.com/");
    }
  }
};

document
  .querySelector("#button-submit")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name");
    const password = document.querySelector("#password");

    if (name.value == "ademiro") {
      if (password.value == "hu3hu3") {
        document.querySelector("#welcome-message").className = "texto-welcome";

        requestXML.open("GET", endpoint, true);
        requestXML.send();

        return alert("Top, entrou");
      } else {
        password.value = "";
        return alert("The password is wrong!");
      }
    } else {
      name.value = "";
      password.value = "";
      return alert("The name is wrong!");
    }
  });

document
  .querySelector("#button-logout")
  .addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("#name").value = "";
    document.querySelector("#password").value = "";

    document.querySelector("#welcome-message").className =
      "texto-welcome-hidden";
  });
