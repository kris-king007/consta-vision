import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ConstituentsService } from './constituents.service';
import { CreateConstituentInput } from './dto/create-constituent.input';
import { UpdateConstituentInput } from './dto/update-constituent.input';

@Resolver('Constituent')
export class ConstituentsResolver {
  constructor(private readonly constituentsService: ConstituentsService) {}

  @Mutation('createConstituent')
  create(@Args('createConstituentInput') createConstituentInput: CreateConstituentInput) {
    return this.constituentsService.create(createConstituentInput);
  }

  @Query('constituents')
  findAll() {
    return this.constituentsService.findAll();
  }

  @Query('constituent')
  findOne(@Args('id') id: number) {
    return this.constituentsService.findOne(id);
  }

  @Mutation('updateConstituent')
  update(@Args('updateConstituentInput') updateConstituentInput: UpdateConstituentInput) {
    return this.constituentsService.update(updateConstituentInput.id, updateConstituentInput);
  }

  @Mutation('removeConstituent')
  remove(@Args('id') id: number) {
    return this.constituentsService.remove(id);
  }
}
