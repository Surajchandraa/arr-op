function filterGreaterThan(arr,num,callback){
    let suraj=arr.filter((a)=>{
        return a>num
    })
    if (suraj.length > 0) {
        callback(null,suraj)
    } else {
        callback(null,"no element found");
    }
}

function filterSmallerThan(arr,num,callback){
    let suraj=arr.filter((a)=>{
        return a<num;
    })
    if(suraj.length >0){
        callback(null,suraj);
    }
    else{
        callback(null,"no element found")
    }
}
function filterEvenNumbers(arr,callback){
    let suraj=arr.filter((a)=>{
        if(a%2==0){
            return a;
        }
        
    })
    if(suraj.length>0){
        callback(null,suraj);
    }
    else{
        callback(null,"no element found")
    }
}


function filterOddNumbers(arr,callback){
    let suraj=arr.filter((a)=>{
        if(a%2!=0){
            return a;
        }
        
    })
    if(suraj.length>0){
        callback(null,suraj);
    }
    else{
        callback(null,"no element found")
    }
}

function removeDuplicates(arr, callback) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }

    callback(null, uniqueArray);
}

module.exports={removeDuplicates,filterEvenNumbers,filterGreaterThan,filterSmallerThan,filterOddNumbers}