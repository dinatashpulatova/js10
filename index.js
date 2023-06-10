let but1 = document.getElementById('but1')
let but3 = document.getElementById('but3')
let out1 = document.getElementById('out1')
let out2 = document.getElementById('out2')
let out3 = document.getElementById('out3')
let out4 = document.getElementById('out4')
let out5 = document.getElementById('out5')
let out6 = document.getElementById('out6')

but1.onclick = f1
but3.onclick = f3

function f2 (arr, old_value, new_value,) {
  for (var i = 0; i < 20; i++) {
    if (arr[i] === old_value) {
      arr[i] = new_value;
    }
  }
  return arr;
}

function f1 () {
  let num = [];
for (let i = 0; i < 20; i++) {
  num.push(Math.floor(Math.random() * 9) + 1);
}
out1.innerText = "Original Array: " + num;
out2.innerText = "All 5 changed to 0: " + (f2(num, 5, 0));
}


function f3 () {
  let arr2 = [];
for (let i = 0; i < 50; i++) {
  arr2.push(Math.floor(Math.random() * 90) + 10)
}
const multipleOfFive = arr2.filter(el => (el % 5) != 0);
const similardigits = arr2.filter(el => (el % 11) != 0);
const uniqArr = [...new Set(arr2)];
out3.innerText = "Original Array №2: " + arr2
out4.innerText = "Number aren't multiple of five: " + multipleOfFive
out5.innerText = "Array without dublicates: " + uniqArr
out6.innerText = "Array without numbers with similar digits: " + similardigits
}

