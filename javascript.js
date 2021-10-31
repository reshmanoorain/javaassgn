// to calculate the % of total marks

function percentage(english,maths,physics,biology,chemistry) {
    
    
    var totalmarks = english + maths + physics + biology + chemistry;
    var y= totalmarks/500 * 100;
    return y;
}
var result=percentage(85, 75, 90, 78, 82);
console.log(result);



// odd or even number

function evenorodd(num) {
    return num%2 ===0?'even':'odd';
}
var res =evenorodd(9);
console.log(res);


// to reverse a string

function reversestring(str) {
    return str
    .split('')
    .reverse('')
    .join('')
}
var res = reversestring('javascript')
console.log(res);