console.log("Hello world from HTML");

let sum = (a, b) => {
    return a + b;
}
console.log('check sum: ', sum(9, 8));

let obj = {
    name: 'Ngân',
    address: 'Tien Giang',
    getName: function () { // getName: method
        return this.name; // this như dấu hiệu nhận biết đang ở đâu
    }
}
console.log(`>>> get name obj: `, obj.getName(), obj.address)

// function và method ==> tái sử dụng code (reuse)