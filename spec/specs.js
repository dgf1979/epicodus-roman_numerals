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

  it("accounts for 5", function() {
    expect(convertToNumerals(5)).to.equal('V');
  });

  it("accounts for greater than 5, up to 8", function() {
    expect(convertToNumerals(8)).to.equal('VIII');
  });

  it("accounts for 9", function() {
    expect(convertToNumerals(9)).to.equal('IX');
  });

  it("accounts for numbers less than 50", function() {
    expect(convertToNumerals(49)).to.equal('XLIX');
  });
});
