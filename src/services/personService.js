const DBPeople = require('../database/people');
const {v4: uuid} = require('uuid');

const getAllPeople = () => {
    const dbPeople = DBPeople.getAllPeople();
    return dbPeople;
};

const getPerson = (idPerson) => {
    const person = DBPeople.getPerson(idPerson);
    return person;
};

const createPerson = (newPerson) => {
    const personToInsert = {
        ...newPerson,
        idPerson : uuid(),
        creationDate: new Date().toLocaleString("en-US", { timeZone: "UTC"})
    }

    const createdPerson = DBPeople.createNewPerson(personToInsert);
    return createdPerson;
};

const updatePerson = (idPerson, changes) => {
    const updatedPerson = DBPeople.updatePerson(idPerson, changes);
    return updatedPerson;
};

const deletePerson = (idPerson) => {
    DBPeople.deletePerson(idPerson);
    return;
};

module.exports = {
    getAllPeople,
    getPerson,
    createPerson,
    updatePerson,
    deletePerson
}
