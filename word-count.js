function words (str) {
  var expectedCounts = {};
  var count = '';
  var array = str.split(/\s*\s+/)

  for (var i = 0; i < array.length; i++) {
    if (!expectedCounts[array[i]]) {
      expectedCounts[array[i]] = 1;
    } else {
      expectedCounts[array[i]]++;
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
