
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateConstituentInput {
    exampleField?: Nullable<number>;
}

export class UpdateConstituentInput {
    id: number;
}

export class Constituent {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract constituents(): Nullable<Constituent>[] | Promise<Nullable<Constituent>[]>;

    abstract constituent(id: number): Nullable<Constituent> | Promise<Nullable<Constituent>>;
}

export abstract class IMutation {
    abstract createConstituent(createConstituentInput: CreateConstituentInput): Constituent | Promise<Constituent>;

    abstract updateConstituent(updateConstituentInput: UpdateConstituentInput): Constituent | Promise<Constituent>;

    abstract removeConstituent(id: number): Nullable<Constituent> | Promise<Nullable<Constituent>>;
}

type Nullable<T> = T | null;
