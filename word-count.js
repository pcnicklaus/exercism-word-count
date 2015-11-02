function words (string) {
  var expectedCounts = {};
  var count = '';
  var a = string.split(' ');
  for (var i = 0; i < a.length; i++) {
    if (a[0] === a[i]) {
      count ++;
      expectedCounts[a[i]] = count;
      console.log(expectedCounts);
    }
  }
  return expectedCounts;
}

console.log(words('word'));


// function showProps(obj, objName) {
//   var result = "";
//   for (var i in obj) {
//     if (obj.hasOwnProperty(i)) {
//         result += objName + "." + i + " = " + obj[i] + "\n";
//     }
//   }
//   return result;
// }


module.exports = words;
