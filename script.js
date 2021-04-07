document
  .querySelector("#button-submit")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name");
    const password = document.querySelector("#password");

    if (name.value == "ademiro") {
      if (password.value == "hu3hu3") {
        return alert("Top, entrou");

        // agora ele tem que ir pra página de "hello pessoa" na língua dela
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
