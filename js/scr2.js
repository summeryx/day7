/**
 * Created by summer on 2017/10/9.
 */

function repeat(arr) {
    var brr = [];
    for (var i=arr.length-1; i>=0; i--) {
        if (brr.indexOf(arr[i]) === -1) {
            brr.push(arr[i]);
        }
    }
    return brr;
}
var arr = [1,2,3,4,5,6,5,4,3,2,1];
repeat(arr);


