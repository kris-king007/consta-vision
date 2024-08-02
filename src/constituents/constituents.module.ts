import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstituentsService } from './constituents.service';
import { ConstituentsController } from './constituents.controller';
import { Constituent } from './entities/constituent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Constituent])],
  controllers: [ConstituentsController],
  providers: [ConstituentsService],
})
export class ConstituentsModule {}
