var arrayOfBadJsStrings = [
  '\' var xss=true;',  //break out of single quotes
  '" var xss=true;',  //break out of double quotes
  'var d = function{){',
  '};',
  'debugger',
  'console.log(\'something here\')',
  'eval(\'bad\')',
  'return'
];

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = arrayOfBadJsStrings;
}