import { Injectable } from '@nestjs/common';
import { Constituent } from '../graphql.schema';

@Injectable()
export class ConstituentsService {
  private readonly constituents: Constituent[] = [];

  create(constituent: Constituent) {
    // TODO: add timestamp
    this.constituents.push(constituent);
    return constituent;
  }

  findAll() {
    return this.constituents;
  }

  update(constituent: Constituent) {
    const matchedConstituentIndex = this.constituents.findIndex((person) => person.email == constituent.email);
    this.constituents[matchedConstituentIndex] = constituent;
    return constituent;
  }
}
