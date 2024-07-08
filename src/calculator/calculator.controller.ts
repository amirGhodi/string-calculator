import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post('add')
  add(@Body('numbers') numbers: string): number {
    try {
      return this.calculatorService.add(numbers);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
