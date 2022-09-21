export class Person {
    private name!: string;
    private age!: number;
    private birthYear!: number

    public setName(name: string): void {
        this.name = name;
    }
    public setAge(age: number): void {
        this.age = age;
    }
    public setBirthYear(birthYear: number): void {
        this.birthYear = birthYear;
    }
    public getPerson(): Person {
        console.log(`Object Person : ${JSON.stringify(this, null, 2)}`);
        return this;
    }
    public printPerson(): Person {
        console.log(`Print Person : Saya ${this.name}, umur saya ${this.age} Tahun dan kelahiran tahun ${this.birthYear}`);
        return this;
    }
}