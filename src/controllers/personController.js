const personService = require('../services/personService')


const getAllPeople =  (req, res) => {
    const allPeople = personService.getAllPeople();
    res.send({status: "OK", data: allPeople});
}

const getPerson =  (req, res) => {
    const {
        params: {idPerson}  
    } = req;

    if (!idPerson) {
        return;
    }

    const person = personService.getPerson(idPerson);
    res.send({status:"OK",body: person});
}

const createPerson =  (req, res) => {
    const {body} = req;

    if (
    !body.name ||
    !body.lastName ||
    !body.gender ||
    !body.age ||
    !body.profession){
        return;
    }

    const newPerson = {
        name: body.name,
        lastName: body.lastName,
        gender: body.gender,
        age: body.age,
        profession: body.profession
    }
    const createdPerson = personService.createPerson(newPerson);
    res.status(201).send({status: "OK", data: createdPerson});
}

const updatePerson =  (req, res) => {
    const { 
        body,
        params: {idPerson} 
    } = req;

    if (!idPerson) {
        return;
    }
    const updatedPerson = personService.updatePerson(idPerson,body);
    res.send({status: "OK", data: updatedPerson});
}

const deletePerson =  (req, res) => {
    const {
        params: {idPerson} 
    } = req;

    if (!idPerson) {
        return;
    }

    personService.deletePerson(idPerson);
    res.status(204).send({ status: "OK"});
}

module.exports = {
    getAllPeople,
    getPerson,
    createPerson,
    updatePerson,
    deletePerson
};