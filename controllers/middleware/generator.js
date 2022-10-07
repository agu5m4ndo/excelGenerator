const { faker } = require('@faker-js/faker')
const fs = require('fs')

const generator = async(amount) => {

    let str = "Nombre; Edad; Sexo; Id del trabajador; Años de experiencia\n";
    for (let index = 0; index < amount; index++) {
        const edad = Math.round(Math.random() * 50 + 19)
        let aniosExperiencia = -1;
        while (aniosExperiencia <= 0) {
            aniosExperiencia = Math.round(Math.random() * (edad - 18));
        }
        str += faker.name.firstName() + "; " +
            edad + "; " + //edad
            faker.name.sex() + "; " +
            (index + 1) + "; " +
            aniosExperiencia + "\n "
    }
    await fs.promises.writeFile('./ArchivosGenerados.csv', str)
    return str;
}

module.exports = generator;