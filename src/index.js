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

// import * as basicLightBox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';

// const image = '<img src="https://i.imgur.com/Zngpr1W.jpeg" alt="foto" width:"500">';
// const show = basicLightBox.create(image);
// document.getElementById('openModal').addEventListener('click', () => {
//     show.show();
// })









/////////////////////////////////////////



//1




// import { success, notice, info, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import '@pnotify/core/dist/BrightTheme.css';
// import { Title } from 'chart.js';

// defaultModules.set(PNotifyMobile, {});



// const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
// let currentKeyIndex = Math.floor(Math.random() * keys.length);
// let currentKey = keys[currentKeyIndex];

// const keyElement = document.getElementById('key');
// keyElement.textContent = `Клавіша: ${currentKey}`;

// document.addEventListener('keydown', (event) => {
   
//     if (event.key.toUpperCase() === currentKey) {
      
//         currentKeyIndex++;

     
//         if (currentKeyIndex >= keys.length) {
//             currentKeyIndex = 0; 
//         }


//         currentKey = keys[currentKeyIndex];

      
//         keyElement.textContent = `Клавіша: ${currentKey}`;


//         let score = parseInt(document.getElementById('score').innerText);
//         score++;
//         document.getElementById('score').innerText = score;


//         success({
//             title: 'Правильно!',
//             text: 'Ви натиснули правильну клавішу!',
//             delay: 1500
//         });

//     } else {
       
//         error({
//             title: 'Помилка!',
//             text: 'Невірно! Спробуйте ще раз.',
//             delay: 1500
//         });
//     }
// });

// document.addEventListener('keypress', () => {
//     event.preventDefault();
// })

// document.getElementById('resetButton').addEventListener('click', () => {
//     let score = 0;
//     document.getElementById('score').innerText = score;
//     currentKeyIndex = Math.floor(Math.random() * keys.length);
//     currentKey = keys[currentKeyIndex];
//     keyElement.textContent = `Клавіша: ${currentKey}`; 

//     notice({
//         title: 'Гра перезапущена!',
//         text: 'Рахунок скинуто! Починайте знову.',
//         delay: 1500
//     });
// });




///////////////////////////////////////////////////////////////////

//2
// import { Chart, registerables } from "chart.js";

// Chart.register(...registerables);
// const chartData = {
//     labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
//     datasets: [
//       {
//         label: "Продажі за останній місяць",
//         data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
//         backgroundColor: "#2196f3",
//         borderColor: "#2196f3",
//         borderWidth: 1,
//       },
//     ],
//   };
//   const config = {
//     type: 'line',
//     data: chartData,
//     options: {}
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const a = document.getElementById('sales-chart').getContext('2d');
//     new Chart(a, config);
// })