import { capitalizeLocations, capitalizeTitle } from '@/src/utils/stringUtils';

describe('capitalizeLocations', () => {
  it('should capitalize the first letter of each word', () => {
    const input = 'new york city';
    const expectedOutput = 'New York City';
    expect(capitalizeLocations(input)).toEqual(expectedOutput);
  });

  it('should handle empty input', () => {
    const input = '';
    const expectedOutput = '';
    expect(capitalizeLocations(input)).toEqual(expectedOutput);
  });
});

describe('capitalizeTitle', () => {
  it('should capitalize the first letter of each word and convert the rest to lowercase', () => {
    const input = 'tHe quIck BROWN foX';
    const expectedOutput = 'The Quick Brown Fox';
    expect(capitalizeTitle(input)).toEqual(expectedOutput);
  });

  it('should handle empty input', () => {
    const input = '';
    const expectedOutput = '';
    expect(capitalizeTitle(input)).toEqual(expectedOutput);
  });
});
