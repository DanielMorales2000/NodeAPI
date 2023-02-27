const { json } = require("body-parser");
const DB = require("./DataBase.json");
const { saveToDatabase } = require("./utils");


const getAllPeople = ()=> {
    return DB.people;
};

const getPerson = (idPerson) => {
    const person = DB.people.find((person) => person.idPerson === idPerson);
    return person;
};

const createNewPerson = (newPerson) => {
    const isAlreadyAdded = DB.people.findIndex((person) => person.name === newPerson.name && person.lastName === newPerson.lastName)
    if (isAlreadyAdded != -1) {
        return;
    }

    DB.people.push(newPerson);
    saveToDatabase(DB);
    return newPerson;
};

const updatePerson = (idPerson, changes) => {
    const indexForUpdate = DB.people.findIndex((person) => (person.idPerson === idPerson))

    if (indexForUpdate === -1) {
        return;
    }

    const updatedPerson = {
        ...DB.people[indexForUpdate],
        ...changes
    }

    DB.people[indexForUpdate] = updatedPerson;
    saveToDatabase(DB);
    return updatedPerson;
};

const deletePerson = (idPerson) => {
    const indexForDelete = DB.people.findIndex (
        (person) => person.idPerson === idPerson
    )

    if (indexForDelete === -1) {
        return;
    }

    DB.people.splice(indexForDelete, 1);
    saveToDatabase(DB);
};

module.exports = { getAllPeople, getPerson, createNewPerson, updatePerson, deletePerson};