import { CreateConstituentInput } from "src/graphql.schema";

export class CreateConstituentDTO extends CreateConstituentInput{
  email: string;
  firstName: string;
  lastName: string;
  streetAddressLine1: string;
  streetAddressLine2: string;
  city: string;
  state: string;
  territory: string;
  country: string;
  phoneNumber: number;
};
