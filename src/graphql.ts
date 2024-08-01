
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateConstituentInput {
    email: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    streetAddressLine1?: Nullable<string>;
    streetAddressLine2?: Nullable<string>;
    city?: Nullable<string>;
    state?: Nullable<string>;
    territory?: Nullable<string>;
    country?: Nullable<string>;
    phoneNumber?: Nullable<number>;
}

export class UpdateConstituentInput {
    email: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    streetAddressLine1?: Nullable<string>;
    streetAddressLine2?: Nullable<string>;
    city?: Nullable<string>;
    state?: Nullable<string>;
    territory?: Nullable<string>;
    country?: Nullable<string>;
    phoneNumber?: Nullable<number>;
}

export class Constituent {
    email: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    streetAddressLine1?: Nullable<string>;
    streetAddressLine2?: Nullable<string>;
    city?: Nullable<string>;
    state?: Nullable<string>;
    territory?: Nullable<string>;
    country?: Nullable<string>;
    phoneNumber?: Nullable<number>;
}

export abstract class IQuery {
    abstract constituents(): Constituent[] | Promise<Constituent[]>;

    abstract constituent(email: string): Nullable<Constituent> | Promise<Nullable<Constituent>>;
}

export abstract class IMutation {
    abstract createConstituent(createConstituentInput: CreateConstituentInput): Constituent | Promise<Constituent>;

    abstract updateConstituent(updateConstituentInput: UpdateConstituentInput): Constituent | Promise<Constituent>;

    abstract removeConstituent(id: string): Nullable<Constituent> | Promise<Nullable<Constituent>>;
}

type Nullable<T> = T | null;
