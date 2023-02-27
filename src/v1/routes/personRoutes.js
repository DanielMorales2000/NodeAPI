const express = require('express');
const router = express.Router();
const personController = require("../../controllers/personController");
const authController = require("../../controllers/authController");
const authService = require("../../services/authService");

router
    .post("/auth",authController.authVerify)
    .get('/', personController.getAllPeople)
    .get('/:idPerson', personController.getPerson)
    .post("/", authService.validateToken, personController.createPerson)
    .patch("/:idPerson", authService.validateToken, personController.updatePerson)
    .delete("/:idPerson", authService.validateToken, personController.deletePerson);
    
module .exports = router;

