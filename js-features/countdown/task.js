let timer = document.getElementById('timer');

let timerId = setInterval(function() {
  timer.textContent--;
}, 1000);

setTimeout(function() {
  clearInterval(timerId);
  alert( 'You win' );
}, ((Number(timer.textContent) + 1) * 1000));

timer.onclick = setTimeout;
