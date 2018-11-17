$(document).ready(function(){
  let setTimeout = function setTimeout(){
    window.setTimeout(timer, 1000);
  };

  let timer = function timer() {
    const time = new Date();
    const clock = $('#clock');

    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    clock.html(hour + ":" + minute + ":" + second);
    // // this also works:
    // clock.html(time.toLocaleTimeString());

    setTimeout();
  };


  timer();

});
