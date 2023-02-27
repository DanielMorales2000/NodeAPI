const express = require('express');
const router = express.Router();
const personController = require("../../controllers/personController")

router
    .get('/', personController.getAllPeople)
    .get('/:idPerson', personController.getPerson)
    .post("/", personController.createPerson)
    .patch("/:idPerson", personController.updatePerson)
    .delete("/:idPerson", personController.deletePerson);
    
module .exports = router;

