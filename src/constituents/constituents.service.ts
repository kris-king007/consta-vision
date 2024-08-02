import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConstituentDto } from './dto/create-constituent.dto';
import { Constituent } from './entities/constituent.entity';

@Injectable()
export class ConstituentsService {
  constructor(
    @InjectRepository(Constituent)
    private constituentsRepository: Repository<Constituent>,
  ) {}

  create(createConstituentDto: CreateConstituentDto) {
    const constituent = new Constituent();
    constituent.email = createConstituentDto.email;
    constituent.firstName = createConstituentDto.firstName;
    constituent.lastName = createConstituentDto.lastName;
    constituent.address = createConstituentDto.address;
  
    return this.constituentsRepository.save(constituent);
  }

  async findAll(): Promise<Constituent[]> {
    return this.constituentsRepository.find();
  }

  findOne(email: string): Promise<Constituent | null> {
    return this.constituentsRepository.findOneBy({ email: email });
  }

  async remove(id: number): Promise<void> {
    await this.constituentsRepository.delete(id);
  }
}
