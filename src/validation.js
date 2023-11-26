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

module.exports={isarray,isempty}