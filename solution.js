// sample input => arr = [[11,2,4],[1,4,7],[10,9,-12]]

function diagonalDifference(arr) {
    const d1 = []
    const d2 = []
    for(let i = 0; i < arr.length; i++){
        d1.push(arr[i][i])
        d2.push(arr[i][arr.length-1-i])
    }
    const reducer = (total, num) => total + num
    return Math.abs(d1.reduce(reducer)-d2.reduce(reducer))
}
