let arr = [12,34,56,76,87,90]

for(i=0;i<6;i++){
    console.log(arr[i]);
    
}

console.log(arr);

arr[2] = arr[2] + 15;

console.log(arr);

// arr=[];

// console.log(arr);

// basic arrays operation

arr.push(94);
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(19);
console.log(arr);

arr.shift()
console.log(arr);

// for each loop
let ar = [32,46,74,67,45,35,64]

for(i = 0; i<ar.length; i++){
    console.log(ar[i]);
}

console.log("print using for each loop");

ar.forEach((element) => {console.log(element);;
})




