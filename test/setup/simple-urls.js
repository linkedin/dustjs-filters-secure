var arrayOfSimpleUrls = [
  'http://www.linkedin.com',
  'https://www.linkedin.com/search?keywords=AT%26T+company&foo=bar#hash',
  'http://twitter.com/#!hash', //hashbang
  '//www.google.com' //schemaless urls
];
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = arrayOfSimpleUrls;
}
