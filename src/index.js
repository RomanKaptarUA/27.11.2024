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

import { success, notice, info, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});


// 1

// alert({
//     text: 'Привіт!'
// });

// 2

const mySuccess = success({
    text: 'Успішно'
});
const myNotice = notice({
    text: 'Успішно'
});
const  myInfo = info({
    text: 'Успішно'
});
const myError = error({
    text: 'Успішно'
});