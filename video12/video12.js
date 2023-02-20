console.log("Hello world from HTML")
let arrTop4 = [ 'ManCity', 'Liverpool', 'MU', 'Chelsea']

// for(let i = 0; i < arrTop4.length; i++) {
//     console.log('Top: ', i + 1, arrTop4[i])
// }

let i = 0
// while(i < arrTop4.length){ // k dc đặt điều kiện là true vì có thể gây ra vòng lặp vô hận
//     console.log('Top: ', i + 1, arrTop4[i]);
//     i++;
// }

// do {  // hạn chế dùng do/while
//     console.log('Top: ', i + 1, arrTop4[i]);
//     i++;
// } while(i < 4)

let flag = false;

while(!flag)
{
    console.log('check value i: ', i)
    i++;
    if(i === 10) flag = true;
}