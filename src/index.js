// NANOID

// import { nanoid } from 'nanoid';
// const id = nanoid(5);
// console.log(id);

// import { customAlphabet } from "nanoid";
// const alphabet = 'abc123';
// const custopmNanoid = customAlphabet(alphabet, 10);

// const id = customNAnoid();
// console.log(id);

////////////////////////////////////////////////////

// PNOTIFY

// import { success, notice, info, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import '@pnotify/core/dist/BrightTheme.css';

// defaultModules.set(PNotifyMobile, {});


// 1

// alert({
//     text: 'Привіт!'
// });

// 2

// const mySuccess = success({
//     text: 'Успішно'
// });
// const myNotice = notice({
//     text: 'Успішно'
// });
// const  myInfo = info({
//     text: 'Успішно'
// });
// const myError = error({
//     text: 'Успішно'
// });






///////////////////////////////////////////////////////

// CHART.JS

// import { Chart, registerables } from "chart.js";
// import { callback } from "chart.js/helpers";

// Chart.register(...registerables);
// const date = {
//     labels: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august'],
//     datasets: [{
//         label: 'temp',
//         data: [15, 14, 16, 18, 20, 22, 23],
//         fill: false,
//         borderColor: 'rgb(80, 192, 190)',
//         tension: 0.1
//     }]
// }

// const config = {
//     type: 'line',
//     data: date,
//     options: {}
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const a = document.getElementById('myChart').getContext('2d');
//     new Chart(a, config);
// })


///////////////////////////////////////////////////////////////////////////////////

// BASICLIGHTBOX

import * as basicLightBox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const image = '<img src="https://i.imgur.com/Zngpr1W.jpeg" alt="foto" width:"500">';
const show = basicLightBox.create(image);
document.getElementById('openModal').addEventListener('click', () => {
    show.show();
})