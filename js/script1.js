/**
 * Created by summer on 2017/10/9.
 */
function repeats(arr) {
    var crr = [];
    for (var i=0; i<arr.length-1; i++) {
        if (crr.indexOf(arr[i]) === -1) {
            crr.push(arr[i]);
        }
    }
    return crr;
}
var arr = [1,2,3,4,5,6,5,4,3,2,1];
repeats(arr);

