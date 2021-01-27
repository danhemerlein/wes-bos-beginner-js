import { handleResult } from "./handlers";
import { colorsByLength, isDark, colors } from "./colors";

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
  return colors.map(color => {
    return `
        <p class="color ${isDark(color) ? 'dark' : ''} ${color}"
          style="background: ${color};">
          ${color}
        </p>
      `
  }).join('');
}

function start () {
  // see if the browser supports the API
  if (('SpeechRecognition' in window)) {
    console.log('sorry your browser does not support the api');
    return;
  }

  // it does work

  // make a new speech reco
  var recongition = new webkitSpeechRecognition();

  // continuously listen
  recongition.continuous = true;
  // will give results while you are speaking
  recongition.interimResults = true;

  recongition.onresult = handleResult;
  recongition.start();

}

start();
colorsEl.innerHTML = displayColors(colorsByLength);
