import { Person } from "../models/person";

export interface Builder {
    reset(): void;
    setTitleName(name: string): void;
    setKelahiran(age: number): void;
    build(): Person;
}