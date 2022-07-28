
// You should implement your task here.

module.exports = function towelSort (matrix)  {
    
    if (matrix) { 
    let arr = [];
        for (let i=0; i<matrix.length;i++) {
        if (i%2===0) {
         arr =arr.concat(matrix[i]);
        } 
        else {
            let mat =matrix[i];
            arr =arr.concat(mat.reverse());
        }
    }
    return arr;
    }
    return [];
};
