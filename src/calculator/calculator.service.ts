import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  add(numbers: string): number {
    if (!numbers) return 0;
    let defaultDelimiter = /,|\n/;
    const customDelimiterRegex = /\/\/(.+)\n/;
    let numberString = numbers;

    const match = numbers.match(customDelimiterRegex);
    if (match) {
      defaultDelimiter = new RegExp(match[1]);
      numberString = numbers.split('\n')[1];
    }

    const numberArray = numberString.split(defaultDelimiter).map(Number);
    const negativeNumbers = numberArray.filter((n) => n < 0);

    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(', ')}`,
      );
    }
    return numberArray.reduce((sum, current) => sum + current, 0);
  }
}
