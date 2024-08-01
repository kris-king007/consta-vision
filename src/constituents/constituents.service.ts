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

  findOne(email: String) {
    return `This action returns the #${email} for a constituent`;
  }

  update(email: String, updateConstituentInput: UpdateConstituentInput) {
    return `This action updates the #${email} for a constituent`;
  }

  remove(email: String) {
    return `This action removes the #${email} for a constituent`;
  }
}
