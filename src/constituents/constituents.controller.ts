import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CreateConstituentDto } from './dto/create-constituent.dto';
import { Constituent } from './entities/constituent.entity';
import { ConstituentsService } from './constituents.service';

@Controller('constituents')
export class ConstituentsController {
  constructor(private readonly constituentsService: ConstituentsService) {}

  @Post()
  create(@Body() createConstituentDto: CreateConstituentDto): Promise<Constituent> {
    return this.constituentsService.create(createConstituentDto);
  }

  @Get()
  findAll(): Promise<string> {
    return this.constituentsService.getCsv();
  }

  @Get(':email')
  findOne(@Param('email') email: string): Promise<Constituent> {
    return this.constituentsService.findOne(email);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.constituentsService.remove(id);
  }
}
