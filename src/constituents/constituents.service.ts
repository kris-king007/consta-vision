import { Injectable } from '@nestjs/common';
import { CreateConstituentInput } from './dto/create-constituent.input';
import { UpdateConstituentInput } from './dto/update-constituent.input';

@Injectable()
export class ConstituentsService {
  create(createConstituentInput: CreateConstituentInput) {
    return 'This action adds a new constituent';
  }

  findAll() {
    return `This action returns all constituents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} constituent`;
  }

  update(id: number, updateConstituentInput: UpdateConstituentInput) {
    return `This action updates a #${id} constituent`;
  }

  remove(id: number) {
    return `This action removes a #${id} constituent`;
  }
}
