let nums = [1,2,3,4,"cat", true, [2,3,4,"car",3]];
console.log(nums[6][3]); // print car
nums[3] += 6;
console.log(nums);


let cities = ["Peshawar", "Islamabad","DI Khan", "Lahore"];
//alert("Welcome to " + cities[1]);
console.log("Welcome to " + cities[0]);
console.log(`Welcome to ${cities[3]}`);
let n1 = [
    [1,2,3],
    [2,3,4],
    [1,2,8]
];
let n2 = [
    [2,4,5],
    [7,3,7],
    [2,3,5]
]

let v1 = n1[0][0] + n2[0][0];
console.log("First correspondence value :" +v1);

let v2 = n1[1][1] + n2[1][1];
console.log("Second Correspondence value : " + v2);

let v3 = n1[2][1] + n2[2][1];
console.log("Third Correspondence value :" + v3);

let arrays = [v1,v2,v3];
console.log(arrays);


// when someone helps you while struggling too that's not help  that's love


let a11 = n1[0][0] + n2[0][0];
let a12 = n1[0][1] + n2[0][1];
let a13 = n1[0][2] + n2[0][2];

let a21 = n1[1][0] + n2[1][0];
let a22 = n1[1][1] + n2[1][1];
let a23 = n1[1][2] + n2[1][2];

let a31 = n1[2][0] + n2[2][0];
let a32 = n1[2][1] + n2[2][1];
let a33 = n1[2][2] + n2[2][2];

let matrix = [
    [a11,a12,a13],
    [a21,a22,a23],
    [a31,a32,a33],

]
console.log(matrix);


let fruits = ["Banana","Orange","Pear","Apple"];

let removed = fruits.pop();// store the removed value
fruits.pop(); // delete the last index
console.log(fruits);


fruits.push("Pine");
console.log(fruits);



console.log("Removed the first value: " + fruits.shift());// remove the first value and shift the addresses to lower index
console.log(fruits)
console.log("Add the first element :" + fruits.unshift("Lemon"));
console.log(fruits);

console.log("Before Addition");
let cars = ["Audi","Honda","BMW","Lexus"];
console.log(cars);

let insert = prompt("Enter value :");
console.log("After Addition");
cars.push(insert);
console.log(cars);



for(let i = 1; i<=100; i++)
{
   // console.log("Loop " ,i);
}


// let fruiit = ["Banana","Orange","Pear","Apple"];
// for(let i = 0; i<=fruiit.length; i++)
// {
//     if(fruiit[i] ==="Pear")
//     {
//         console.log(fruiit[i]);
//     }
   
// }


let fruiit = ["Banana","Orange","Pear","Apple"];
for(let i = 0; i<=fruiit.length; i++)
{
    if(fruiit[i] === fruiit[2])
    {
        console.log(fruiit[i]);
    }
   
}

let student = [50,54,90,11,32,88,22,76,33,33,46,71,10,30,61,99,22,18,88,41];
//for(let i ; i<=student.length; )
{
    if(student[i]>=50)
    {
        
        console.log("Total studens Passed :" ,student[i]);
        //console.log(student[i]);
    }
}

