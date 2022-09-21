import { DocterBuilder } from "./concrete/docter.builder";
import { DosenBuilder } from "./concrete/dosen.builder";
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
    const dosenBuilder = new DosenBuilder();
    const dosenDirector = new PersonDirector(dosenBuilder);
    dosenDirector.addPerson("Asep", 26);
    dosenBuilder
        .build()
        .getPerson()
        .printPerson()
}

clientCode();