describe('convertToNumerals', function() {
  it("converts the ones digit to numerals", function() {
    expect(convertToNumerals(3)).to.equal('III');
  });

  it("converts the tens digit to numerals", function() {
    expect(convertToNumerals(33)).to.equal('XXXIII');
  });
});
