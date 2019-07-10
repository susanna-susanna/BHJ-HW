let cookieCount = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

function changeSize() {
   cookie.classList.toggle("mystyle");
   cookieCount.textContent++;
}

cookie.onclick = changeSize;