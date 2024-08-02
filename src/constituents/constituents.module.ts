import { Module } from '@nestjs/common';
import { ConstituentsService } from './constituents.service';
import { ConstituentsResolver } from './constituents.resolver';

@Module({
  providers: [ConstituentsResolver, ConstituentsService],
})
export class ConstituentsModule {}
