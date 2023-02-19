console.log("Hello world from HTML")

let arr = ['Mu', 'Mancity', 'Liver', 'Chelsea']
for(var i = 0; i < arr.length; i++){ // lặp từng phần tử 1 trong cái phần check
    console.log('check variable i = ', arr[i])
}

console.log('check value i: ', i)

let arr1 = ['Mu', 'Mancity', 'Liver', 'Chelsea']
let i = 0
for(let i = 0; i < arr1.length; i++){ // lặp từng phần tử 1 trong cái phần check
    console.log('check variable i = ', arr1[i])
}
console.log('check value i: ', i)

// nên dùng let đừng nên dùng var vì var khá nguy hiểm