let theme = "sun";

const toggle = document.querySelector("#toggle")

toggle.addEventListener('click', function (event) {
  if (theme === 'sun') {
    theme = "moon"
    document.body.style.backgroundColor = "#000";
  } else {
    theme = "sun";
    document.body.style.backgroundColor = "#f1c40f";
  }
})