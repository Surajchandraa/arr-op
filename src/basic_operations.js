function find_largest(arr,callback){
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }

    let suraj = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>suraj){
            suraj=arr[i];
        }
    }

    callback(null,suraj)
}

function sum(arr,callback){
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }

    let joshi=arr.reduce((a,b)=>{
        return a+b;
    })
    callback(null,joshi)
}

function smallest(arr,callback){
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }

    let suraj=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<suraj){
            suraj=arr[i];
        }
    }

    callback(null,suraj)
}

function totalelements(arr,callback){
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }
    let number=0;
    for(let i=0;i<arr.length;i++){
        number++;
    }
    callback(null,number)
}

function expon(arr,power,callback){
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]**power;
    }

    callback(null,arr)
}

function typeofelementarr(arr,callback){
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=typeof(arr[i]);
    }

    callback(null,arr)

}

function rev(arr,callback){
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }
    callback(null,arr.reverse())
}

function findindex(arr,element,callback){
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }
    let index=null;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==element){
            index=i;
        }
    }
    if(index==null){
        callback(null,"element not in arr");
    }
    else{
    callback(null,index)
}}



function shuffle(arr, callback) {
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }
    let currentIndex = arr.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    if (typeof callback === 'function') {
        callback(null, arr);
    }
}

module.exports={find_largest,sum,smallest,shuffle,findindex,rev,expon,typeofelementarr,totalelements}