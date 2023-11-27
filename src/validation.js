function isempty(arr){
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }
    if(arr.length==0){
        return true;
    }
    else{
        return false;
    }
}

function isarray(arr) {
    return Array.isArray(arr);
}

function issorted(arr){
    let ascending= arr.slice().sort((a,b)=>a-b);
    if(JSON.stringify(ascending)===JSON.stringify(arr)){
        return 'Ascending';
    }
    let descending= arr.slice().sort((a,b)=>b-a);
    if(JSON.stringify(descending)===JSON.stringify(arr)){
        return 'Descending';

    }
    else{
        return false;
    }
}

function hasDuplicates(arr) {
    let set = new Set(); 

    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) { 
            return true; 
        }
        set.add(arr[i]); 
    }

    return false; 
}




module.exports={isarray,isempty,hasDuplicates,issorted};