var aStrings = require('../setup/simple-strings'),
    aHTMLStrings = require('../setup/simple-html');

describe("dust escapeHtml |h filters works", function() {
  it("should not contain < > or double quotes", function(){
    for (var i=0, len=aHTMLStrings.length; i<len; i++){
      expect(dustFilters.h(aHTMLStrings[i])).not.toMatch('/[<>"]/');
    }
  });
  it("should have the custom escapeHtml method", function(){
    expect(oldFilters.h).not.toBe(dustFilters.h);
  });
  it("should be backwards compatible", function(){
    // for (var i=0, len=aHTMLStrings.length; i<len; i++){
      // console.log(dustFilters.h(aHTMLStrings[i]), oldFilters.h(aHTMLStrings[i]));
      // expect(dustFilters.h(aHTMLStrings[i])).toEqual(oldFilters.h(aHTMLStrings[i]));
    // }
  });
});