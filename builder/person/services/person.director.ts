import { Builder } from "../interfaces/builder";

export class PersonDirector {
    private builder!: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    public addPerson(name: string, age: number): void {
        this.builder.setTitleName(name);
        this.builder.setKelahiran(age);
    }
}