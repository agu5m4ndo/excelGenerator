const { faker } = require('@faker-js/faker')
const fs = require('fs')

const generator = async(amount) => {
    let str = "Nombre; Apellido; Sexo; Id del trabajador; Area\n";
    for (let index = 0; index < amount; index++) {
        str += faker.name.firstName() + "; " +
            faker.name.lastName() + "; " +
            faker.name.sex() + "; " +
            (index + 1) + "; " +
            faker.name.jobArea() + "\n "
    }
    await fs.promises.writeFile('./ArchivosGenerados.csv', str)
    return str;
}

module.exports = generator;