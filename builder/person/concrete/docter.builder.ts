import { PersonTitle } from "../constants/personTitle.enum";
import { Builder } from "../interfaces/builder";
import { Person } from "../models/person";

export class DocterBuilder implements Builder {
    private person!: Person;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.person = new Person()
    }

    public setTitleName(name: string): void {
        this.person.setName(`${PersonTitle.dr} ${name}`);
    }

    public setKelahiran(age: number): void {
        const date = new Date().getFullYear();
        this.person.setAge(age);
        this.person.setBirthYear(date - age);
    }

    public build(): Person {
        return this.person;
    }
}