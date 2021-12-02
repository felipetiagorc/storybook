const map = (array, cb) =>{    
    var newArray = []
    for(let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i], i, array)) 
}
   return newArray
}

export default map;
