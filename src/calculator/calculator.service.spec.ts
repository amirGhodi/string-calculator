import { expect } from 'chai';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let calculatorService: CalculatorService;

  beforeEach(() => {
    calculatorService = new CalculatorService();
  });

  it('should return 0 for an empty string', async () => {
    const result = calculatorService.add('');
    expect(result).to.equal(0);
  });

  it('should return the sum of numbers separated by commas', () => {
    const result = calculatorService.add('1,2,3');
    expect(result).to.equal(6);
  });

  it('should return the sum of numbers separated by newlines', () => {
    const result = calculatorService.add('1\n2\n3');
    expect(result).to.equal(6);
  });

  it('should throw an error for negative numbers', () => {
    try {
      calculatorService.add('1,-2,3');
    } catch (err){
      expect(err.message).to.equal('negative numbers not allowed -2');
    }

  });

  it('should throw an error listing all negative numbers', () => {
    try {
      calculatorService.add('-1,2,-3');
    } catch (err){
      expect(err.message).to.equal('negative numbers not allowed -1, -3');
    }
  });

});
