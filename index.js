const form = document.getElementById("subscribe");
const inputEmail = document.getElementById("email");
const divError = document.querySelector(".email-error");
const inputError = form.addEventListener("submit", function (ev) {
  console.log("ola mundo");
  const emailValidation = validation();
  console.log(emailValidation);
  if (emailValidation) {
    console.log("deu bom");
  } else {
    ev.preventDefault();
    const span = document.createElement("span");
    span.innerText = "Valid email required";
    divError.appendChild(span);
    inputEmail.classList = 'email'

    inputEmail.addEventListener("keydown", function () {
      if (span.innerText != "") {
        divError.removeChild(span);
        span.innerText = "";
        inputEmail.classList.remove('email')
        
      }
    });
  }
  inputEmail.focus()
});
function validation() {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(inputEmail.value);
}
