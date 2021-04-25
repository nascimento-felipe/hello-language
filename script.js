document
  .querySelector("#button-submit")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name");
    const password = document.querySelector("#password");

    if (name.value == "ademiro") {
      if (password.value == "hu3hu3") {
        document.querySelector("#welcome-message").className = "texto-welcome";

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
