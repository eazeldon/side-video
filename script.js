

function play1Pause1(btn, vid) {

   var vid = document.getElementById(vid);
   if (vid.paused) {
      vid.play();
      btn.innerHTML = "Pause1";

   } else {
      vid.pause();
      btn.innerHTML = "Play1";

   }

}
function play2Pause2(btn, vid) {

   var vid = document.getElementById(vid);
   if (vid.paused) {
      vid.play();
      btn.innerHTML = "Pause2";

   } else {
      vid.pause();
      btn.innerHTML = "Play2";

   }

}









