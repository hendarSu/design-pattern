import { PersonTitle } from "../constants/personTitle.enum";
import { Builder } from "../interfaces/builder";
import { Person } from "../models/person";

export class DosenBuilder implements Builder {
    private person!: Person;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.person = new Person();
    }
    setTitleName(name: string): void {
        this.person.setName(`${name} ${PersonTitle.gelar}`)
    }
    setKelahiran(age: number): void {
        this.person.setAge(age);
        const currentYear = new Date().getFullYear();
        this.person.setBirthYear(currentYear - age);
    }
    build(): Person {
        return this.person;
    }

}