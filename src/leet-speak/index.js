var MATCHES = [
  ['O', '0'],
  ['L', '1'],
  ['R', '2'],
  ['E', '3'],
  ['A', '4'],
  ['S', '5'],
  ['G', '6'],
  ['T', '7']
];

module.exports = function convertToLeet(text) {
  for (var i = 0; i < MATCHES.length; i++) {
    var matcher = new RegExp(MATCHES[i][0], 'gi');
    text = text.replace(matcher, MATCHES[i][1]);
  }

  return text;
};
