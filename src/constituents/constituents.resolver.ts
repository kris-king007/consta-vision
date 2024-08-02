import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Constituent } from 'src/graphql.schema';
import { ConstituentsService } from './constituents.service';
import { CreateConstituentDTO } from './dto/create-constituent.input';
import { UpdateConstituentDTO } from './dto/update-constituent.input';

@Resolver('Constituent')
export class ConstituentsResolver {
  constructor(private readonly constituentsService: ConstituentsService) {}

  @Query('constituents')
  async findAll() {
    return this.constituentsService.findAll();
  }

  @Mutation('createConstituent')
  async create(@Args('createConstituentInput') args: CreateConstituentDTO): Promise<Constituent> {
    return this.constituentsService.create(args);
  }

  @Mutation('updateConstituent')
  async update(@Args('updateConstituentInput') args: UpdateConstituentDTO): Promise<Constituent> {
    return this.constituentsService.update(args);
  }
}
