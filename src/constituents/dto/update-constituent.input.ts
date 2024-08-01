import { CreateConstituentInput } from './create-constituent.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateConstituentInput extends PartialType(CreateConstituentInput) {
  id: number;
}
