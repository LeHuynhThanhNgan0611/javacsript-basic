console.log("Hello world from HTML")

// key: value
let obj = {
    name: 'Eric', 
    address: 'Hà Nội',
    email: '',
    gender: '',
    a: function(){
        console.log('Hello world inside function')
        return ''// Rất ít khi dùng function trong object
    }  // convention: luật lệ khi code
};

JSON
"{name: 'Eric, address: 'Ha Noi'}" // từ từ tìm hiểu (là ngôn ngữ giao tiếp giữa FE và BE)

let b = 'adress';
// obj[b] = 'Harry'
obj.address = 'HCM'
let c = ''

console.log('What is your name ? ', `My name's: `,obj[`name`], obj)
console.log('Where are you from ? ', `I'm from: `,obj.address)
console.log(`Call function: `, obj.a()) // Rất ít khi sử dụng
// console.log('type of a: ', typeof a, 'type of b: ', typeof b)