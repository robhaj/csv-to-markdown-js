var data = require('./strings');
var people = data.mvp.people;
var companies = data.mvp.companies;

var newArr = people.split(',');
  var first = newArr[0];
  var last = newArr[1];
  var twoSplit = newArr[2].toString().split('\n');
  var address = twoSplit[0];
  newArr[12] = newArr[12].toString().split('\n')[0];

  console.log(first + '       |  '+last+'       |  '+ address+
  '\n----------  |  ---------- |  ------------------------'+
  '\n'+twoSplit[1] + '   |  '+newArr[3] + '  |  '+newArr[4]+
  '   |  '+newArr[5]+ '     |  '+newArr[6] + '      |  '+newArr[7]+
  '       |  '+newArr[8]+'       |  '+newArr[9]+' |  '+newArr[10]+
  '    |  '+newArr[11] + '   |  ' +newArr[12]);
