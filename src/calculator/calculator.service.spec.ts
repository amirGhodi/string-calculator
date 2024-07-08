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

});
