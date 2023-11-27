# arr-op
work with array.

## Installation:
- to install run command
```bash
    npm install arr-op
```

## basic operations:

```js
    const oper = require('arr-op');

    let arr = [1, 3, 5, 6, 7, 8];

    oper.find_largest(arr, (err, output) => {
    console.log(output); // find_largest function returns the largest in the array // Output: 8
    });

    oper.smallest(arr, (err, output) => {
    console.log(output); // find smallest in the array // Output: 1
    });

    oper.sum(arr, (err, output) => {
    console.log(output); // sum of all elements // Output: 30
    });

    oper.shuffle(arr, (err, output) => {
    console.log(output); // shuffle the array // Output: [shuffled array]
    });

    oper.findindex(arr, 6, (err, output) => {
    console.log(output); // find the index of element 6 in the arr // Output: 3
    });

    oper.rev(arr, (err, output) => {
    console.log(output); // returns the reverse of the array // Output: [8, 7, 6, 5, 3, 1]
    });

    oper.totalelements(arr, (err, output) => {
    console.log(output); // returns the number of total element in the array // Output: 6
    });

    oper.expon(arr, 2, (err, output) => {
    console.log(output); // get the square value of all element of an array. // Output: [1, 9, 25, 36, 49, 64]
    });

    oper.typeofelementarr(arr, (err, output) => {
    console.log(output); // get the type of all elements in the array // Output: ['number''number','number', 'number', 'number', 'number']
});




```

## sorting functions:
```js

    const oper = require('arr-op');
    let arr = [1, 3, 5, 6, 7, 8];

    oper.sortAsc(arr, (err, output) => {
    console.log(output); // sort array in ascending order // Output: [1, 3, 5, 6, 7, 8]
    });

    oper.sortDesc(arr, (err, output) => {
    console.log(output); // sort array in descending order // Output: [8, 7, 6, 5, 3, 1]
    });




```

## search functions:
```js
    const oper=require('arr-op');
     let arr=[1,3,5,6,7,8];

     oper.findAllOccurace(arr,7,(err,output)=>{
        console.log(output); //find all occurance of an element output: ['7':1]
     });


```

## statistical functions:
```js

    const oper=require('arr-op');
     let arr=[1,3,5,6,7,8];
     let obj={
        '0':4,
        '1':5,
        '2':6
     }

     
     oper.mean(arr,(err,output)=>{
        console.log(output); ///get the mean value /
     })

     oper.median(arr,(err,output)=>{
        console.log(output); //get the median value 
     })

     oper.range(arr,(err,output)=>{
        console.log(output) //get the range of array "max value in array minus min value in array"
     })

     oper.findKeyByValue(obj,4,(err,output)=>{
        console.log(output) //get the key of object using its value. //output -0
     })


```

## Validation functions:
```js

    const oper=require('arr-op');
     let arr=[1,3,5,6,7,8];

     oper.isarray(arr) //check is array or not //output - true
     oper.isempty(arr) //check is array empty or not //output = false


      console.log(oper.isSorted(arr)); // Output: 'Ascending' (if sorted in ascending order)
      console.log(oper.isSorted(arr)); // Output: 'Descending' (if sorted in descending order)
      console.log(oper.isSorted(arr)); // Output: 'false' (if not sorted)

      console.log(oper.hasDuplicates(arr)); // Output: true or false

```