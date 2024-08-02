import { Injectable, StreamableFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConstituentDto } from './dto/create-constituent.dto';
import { Constituent } from './entities/constituent.entity';
import { json2csv } from 'json-2-csv';

const constituentCsvWriterPath = './tmp/constituents.csv';

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

  async getCsv(): Promise<string> {    
    const constituents = await this.constituentsRepository.find();
    const options = {
      emptyFieldValue: 'Not Provided',
    };
    return await json2csv(constituents, options)
    // TODO: Save csvString as csv file instead of return csv string.
  }

  findOne(email: string): Promise<Constituent | null> {
    return this.constituentsRepository.findOneBy({ email: email });
  }

  async remove(id: number): Promise<void> {
    await this.constituentsRepository.delete(id);
  }
}


