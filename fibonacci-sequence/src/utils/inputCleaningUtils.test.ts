import { allowOnlyNumeric, allowNumericAndHyphen, formatNumberToScientificNotation, formatInputToMaxChars } from './inputCleaningUtils';

describe('allowOnlyNumeric', () => {
  it('should remove non-numeric characters from the input string', () => {
    const result = allowOnlyNumeric('a1b2c3');
    expect(result).toEqual('123');
  });

  it('should remove hyphen when present', () => {
    const result = allowOnlyNumeric('-45abc');
    expect(result).toEqual('45');
  });

  it('should return an empty string for an input with no numeric characters', () => {
    const result = allowOnlyNumeric('abc');
    expect(result).toEqual('');
  });

  it('should remove all non-numeric characters when there are multiple occurrences', () => {
    const result = allowOnlyNumeric('1a2b3c4d5e6f7g8h9i0');
    expect(result).toEqual('1234567890');
  });
});

describe('allowNumericAndHyphen', () => {
  it('should remove non-numeric characters except hyphen from the input string', () => {
    const result = allowNumericAndHyphen('a1b-2c3');
    expect(result).toEqual('1-23');
  });

  it('should return an empty string for an input with no numeric or hyphen characters', () => {
    const result = allowNumericAndHyphen('abc');
    expect(result).toEqual('');
  });

  it('should remove all non-numeric characters except hyphen when there are multiple occurrences', () => {
    const result = allowNumericAndHyphen('a1b-2c3d-4e5f-6g7h-8i9j0');
    expect(result).toEqual('1-23-45-67-890');
  });

  it('should remove return hypens when there are only hypens present', () => {
    const result = allowNumericAndHyphen('---');
    expect(result).toEqual('---');
  });
});

describe('formatNumberToScientificNotation', () => {
  it('should return the number as a string if it has 10 or fewer digits', () => {
    const result = formatNumberToScientificNotation(123456789n);
    expect(result).toEqual('123456789');
  });

  it('should return the number as a string if it has 10 or fewer digits and is zero ', () => {
    const result = formatNumberToScientificNotation(0n);
    expect(result).toEqual('0');
  });

  it('should return the number as a string if it has 10 or fewer digits and is negative ', () => {
    const result = formatNumberToScientificNotation(-123456789n);
    expect(result).toEqual('-123456789');
  });

  it('should convert a large number to scientific notation with 8 decimal places', () => {
    const result = formatNumberToScientificNotation(12345678901234567890n);
    expect(result).toEqual('1.23456789e+19');
  });

  it('should convert a large negative number to scientific notation with 8 decimal places', () => {
    const result = formatNumberToScientificNotation(-12345678901234567890n);
    expect(result).toEqual('-1.23456789e+19');
  });


});
describe('formatInputToMaxChars', () => {
  it('should not format a string the same length as the maxLength', () => {
    const maxLength = 6
    const result = formatInputToMaxChars("abc123", maxLength)
    expect(result).toHaveLength(maxLength);
  });
  it('should not format a string when string length is less than maxLength', () => {
    const maxLength = 12
    const result = formatInputToMaxChars("abc123", maxLength)
    expect(result).toHaveLength(6);
  });
  it('should format a string the length given', () => {
    const maxLength = 4
    const result = formatInputToMaxChars("abc123", maxLength)
    expect(result).toHaveLength(maxLength);
  });
  it('should format a string the length given when length is zero', () => {
    const maxLength = 0
    const result = formatInputToMaxChars("abc123", maxLength)
    expect(result).toHaveLength(maxLength);
  });

});