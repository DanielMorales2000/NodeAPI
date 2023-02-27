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
        res.status(400).send({status: "FAILED", data: {error:"Parametros"}});
        return;
    }
    try {
        const person = personService.getPerson(idPerson);
        res.send({status:"OK",body: person});
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error || error}});
    }

}

const createPerson =  (req, res) => {
    const {body} = req;

    if (
    !body.name ||
    !body.lastName ||
    !body.gender ||
    !body.age ||
    !body.profession){
        res.status(400).send({status: "FAILED", data: {error: 'Campos faltantes'}});
        return;
    }

    const newPerson = {
        name: body.name,
        lastName: body.lastName,
        gender: body.gender,
        age: body.age,
        profession: body.profession
    }
    try {
        const createdPerson = personService.createPerson(newPerson);
        res.status(201).send({status: "OK", data: createdPerson});
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error || error}})
    }
}

const updatePerson =  (req, res) => {
    const { 
        body,
        params: {idPerson} 
    } = req;

    if (!idPerson) {
        res.status(400).send({status: "FAILED", data: {error:"Parametros"}});
        return;
    }

    try {
        const updatedPerson = personService.updatePerson(idPerson,body);
        res.send({status: "OK", data: updatedPerson});
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error || error}})
    }
}

const deletePerson =  (req, res) => {
    const {
        params: {idPerson} 
    } = req;

    if (!idPerson) {
        res.status(400).send({status: "FAILED", data: {error:"Parametros"}});
        return;
    }

    try {
        personService.deletePerson(idPerson);
        res.status(204).send({ status: "OK"});
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error || error}})
    }
}

module.exports = {
    getAllPeople,
    getPerson,
    createPerson,
    updatePerson,
    deletePerson
};