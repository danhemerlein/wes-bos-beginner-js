import { hslToRgb } from './utils';

const WIDTH = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector('canvas');

const context = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyzer;
let bufferLength;

function handleError(err) {
  console.log('please give access to the mic to proceed');
}

// running on a server because it is a secure origin - like localhose

async function getAudio() {
  const stream = await navigator.mediaDevices.getUserMedia({audio: true}).catch(handleError);

  const audioContext = new AudioContext();
  analyzer = audioContext.createAnalyser();

  // pipe the data out
  const src = audioContext.createMediaStreamSource(stream);
  src.connect(analyzer);

  // figure out how much data we want access to
  analyzer.fftSize = 2 ** 5;

  // how many pieces of data are there?
  bufferLength = analyzer.frequencyBinCount;
  // pull the data off the audio
  // the data that were getting back is 8 bits or one bytes
  const timeData = new Uint8Array(bufferLength);
  const frequencyData = new Uint8Array(bufferLength);
  drawTimeData(timeData);
  drawFrequency(frequencyData)
}

function drawTimeData(timeData) {
  // inject the time data into our time data array
  analyzer.getByteTimeDomainData(timeData);

  // now that we have the data - lets turn it into something visual
  // clear the canvas
  context.clearRect(0,0,WIDTH,HEIGHT);
  // set up some canvas drawing
  context.lineWidth = 10;
  context.strokeStyle = '#fff';
  context.beginPath();

  // with of UI
  const sliceWidth = WIDTH / bufferLength;

  let x = 0;

  timeData.forEach((data, i) => {
    const v = data / 128;
    const y = (v * HEIGHT) / 2;
    // draw lines
    if (i === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }

    x += sliceWidth;
  });

  context.stroke();

  // call itself as soon as possible
  requestAnimationFrame(() => drawTimeData(timeData));
}

function drawFrequency(frequencyData) {
  // get frequency data in frequencyData array
  analyzer.getByteFrequencyData(frequencyData);
  requestAnimationFrame(() => drawFrequency(frequencyData));

  // first we will figure out the bar width
  // multiply to remove the extremely high frequencies
  const barWidth = (WIDTH / bufferLength) * 2.5;

  let x = 0;

  frequencyData.forEach((data, i) => {
    // 0 to 255
    const percent = data / 255;
    const [h, s, l] = [360 / (percent * 360) - 0.5, 0.8, 0.5];
    const barHeight = (HEIGHT * percent) / 2;

    // conver the color to HSL
    const [r, g, b] = hslToRgb(h, s, l);
    context.fillStyle = `rgb(${r}, ${g}, ${b})`;

    context.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

    x += barWidth + 1;

  })

}

getAudio();
