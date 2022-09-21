import { DocterBuilder } from "./concrete/docter.builder";
import { PersonDirector } from "./services/person.director";

function clientCode() {
    const doctorBuilder = new DocterBuilder();
    const directorDoctor = new PersonDirector(doctorBuilder);
    directorDoctor.addPerson("Hendar", 25);
    doctorBuilder
        .build()
        .getPerson()
        .printPerson();

    console.log("===============================");
}

clientCode();