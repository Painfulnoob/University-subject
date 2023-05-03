var arr = ['a', 'b', 'c'];
var arr2 = [1, 'b', '3.5151231231'];
// arr = ['a', 'b', 'c', 'e'];
arr[arr.length] = 'e'
arr = ['a', 'b', 'c'];
arr.length = arr.length - 1;
arr[5] = 'g';
arr.pop();
arr2.push("pushed");
arr.shift();
arr2.unshift("pushed2");

console.log(arr);
console.log(typeof arr2[0]);
console.log(arr2.toString());
console.log(typeof arr[3]);