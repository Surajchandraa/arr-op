const {sortAsc,sortDesc}=require('./sorting_functions');
const {find_largest,sum,smallest,shuffle,findindex,rev,expon,typeofelementarr,totalelements}=require('./basic_operations')
function mean(arr,callback){
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }
    let su=0;
    let to=0;
    sum(arr,(err,out)=>{
        su=out;

    })
    totalelements(arr,(err,out)=>{
        to=out;
    })

    

    callback(null,su/to);

    
}

function median(arr,callback){
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }
    let ar=0;
    sortAsc(arr,(err,data)=>{
        ar=data;
    })
    let median=null;
    let middleindex=Math.floor(arr.length/2)

    if(arr.length%2!=0){
        median=ar[middleindex]
    }
    else{
        median=(ar[middleindex-1]+ ar[middleindex])/2
    }

    callback(null,median)
}

function findKeyByValue(obj, value) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] === value) {
                return key;
            }
        }
    }
    return null; // Return null if the value is not found in the object
}

function mode(arr, callback) {
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }
    let freq = {};

    arr.forEach(element => {
        if (freq[element]) {
            freq[element]++;
        } else {
            freq[element] = 1;
        }
    });

    let keys = Object.keys(freq);
    let maxfreq = freq[keys[0]]; // Initialize maxfreq with the frequency count of the first element

    for (const key in freq) {
        if (maxfreq < freq[key]) {
            maxfreq = freq[key];
        }
    }

    let mode = findKeyByValue(freq, maxfreq);

    callback(null, mode);
}


function range(arr,callback){
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }
    let max = null;
    find_largest(arr,(err,out)=>{
        max=out;
    })
    let min=null;
    smallest(arr,(err,out)=>{
        min=out;
    })

    callback(null, max-min);
}

module.exports={mean,mode,findKeyByValue,median,range}