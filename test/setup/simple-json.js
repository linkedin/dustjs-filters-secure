var arrayOfJsStrings = [
{"foo": 'bar'},
{"a b c": {unquoted:"nested"}},
{"hyphen-ated": [1,2,3]},
{unquoted: "<html>here<script>var a = 'string';</script></html>"}
];

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = arrayOfJsStrings;
}
