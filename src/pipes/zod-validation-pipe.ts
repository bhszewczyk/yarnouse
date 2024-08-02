import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      return this.schema.parse(value);
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.errors
          .map((err) => {
            return `Property "${err.path.join('.')}": ${err.message}`;
          })
          .join(', ');
        throw new BadRequestException(`Validation failed: ${formattedErrors}`);
      }

      throw new BadRequestException('Validation failed');
    }
  }
}
