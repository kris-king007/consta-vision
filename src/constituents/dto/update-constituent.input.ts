import { UpdateConstituentInput } from "src/graphql.schema";

export class UpdateConstituentDTO extends UpdateConstituentInput {
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
}
