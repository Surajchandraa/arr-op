function findAllOccurace(arr,element,callback){
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }
    let occ=null;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==element){
            occ++;
        }
    }
    if(occ==null){
        callback(null,"element not in arr");
    }
    else{
    callback(null,occ)
    
}
}

module.exports={findAllOccurace}