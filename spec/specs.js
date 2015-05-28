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

  it("accounts for numbers from 50 to 89", function() {
    expect(convertToNumerals(89)).to.equal('LXXXIX');
  });

  it("accounts for numbers from 90 to 99", function() {
    expect(convertToNumerals(99)).to.equal('XCIX');
  });

  it("accounts for numbers less than 500", function() {
    expect(convertToNumerals(499)).to.equal('CDXCIX');
  });

  it("accounts for numbers from 500 to 899", function() {
    expect(convertToNumerals(899)).to.equal('DCCCXCIX');
  });

  it("accounts for numbers from 900 to 999", function() {
    expect(convertToNumerals(999)).to.equal('CMXCIX');
  });

  it("accounts for numbers up to 3999", function() {
    expect(convertToNumerals(3999)).to.equal('MMMCMXCIX');
  });

  it("alerts the user if the number is too high", function() {
    expect(convertToNumerals(4000)).to.equal('Your number is too large');
  });
});
