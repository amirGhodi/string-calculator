import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  add(numbers: string): number {
    if (!numbers) return 0;
    let defaultDelimiter = /,|\n/;

    const numberArray = numbers.split(defaultDelimiter).map(Number);
    return numberArray.reduce((sum, current) => sum + current, 0);
  }
}
