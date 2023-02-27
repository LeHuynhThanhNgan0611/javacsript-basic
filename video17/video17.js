console.log("Hello world from HTML")

function getName (x, y, i) {
    console.log('1')
    console.log('2')
    console.log('3')
    if (i===5) return; // thoát ra khỏi func
    console.log('4')
    console.log('5')
    return x + y + i;
}
console.log('check sum: ', getName(9, 7, 8));