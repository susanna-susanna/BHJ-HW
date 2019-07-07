let cookieCount = document.getElementById("clicker__counter");

function changeSize() {
   let element = document.getElementById("cookie");
   element.classList.toggle("mystyle");
   cookieCount.textContent++;
}

