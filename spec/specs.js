describe('convertToNumerals', function() {
  it("converts the ones digit to numerals", function() {
    expect(convertToNumerals(3)).to.equal('III');
  });

  it("converts the tens digit to numerals", function() {
    expect(convertToNumerals(33)).to.equal('XXXIII');
  });

  it("convert up to the hundreds place", function() {
    expect(convertToNumerals(333)).to.equal('CCCXXXIII');
  });

  it("convert up to the thousands place", function() {
    expect(convertToNumerals(3333)).to.equal('MMMCCCXXXIII');
  });

  it("converts 4 via subtraction", function() {
    expect(convertToNumerals(4)).to.equal('IV');
  });
});
