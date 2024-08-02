import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConstituentDto } from './dto/create-constituent.dto';
import { Constituent } from './entities/constituent.entity';
import { constituentCsvWriter, constituentCsvWriterPath } from 'src/commons/csvConverter';

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

  // async findAll(): Promise<Constituent[]> {
  //   return this.constituentsRepository.find();
  // }

  async getCsv(): Promise<string> {    
    const constituents = this.constituentsRepository.find();
    await constituentCsvWriter.writeRecords([constituents]);
    // TODO: create a stream and return file.
    return constituentCsvWriterPath;
  }

  findOne(email: string): Promise<Constituent | null> {
    return this.constituentsRepository.findOneBy({ email: email });
  }

  async remove(id: number): Promise<void> {
    await this.constituentsRepository.delete(id);
  }
}


