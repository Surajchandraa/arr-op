function sortAsc(arr, callback) {
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }
    let suraj = arr.slice().sort((a, b) => a-b); // Create a copy of the array, sort it ascendingly
    if (typeof callback === 'function') {
        callback(null, suraj); // Call the callback function with the sorted array
    }
}

function sortDesc(arr, callback) {
    if (!Array.isArray(arr)) {
        return callback(new Error('Input is not an array'));
    }
    let suraj = arr.slice().sort((a, b) => b-a); // Create a copy of the array, sort it ascendingly
    if (typeof callback === 'function') {
        callback(null, suraj); // Call the callback function with the sorted array
    }
}

module.exports={sortAsc,sortDesc}