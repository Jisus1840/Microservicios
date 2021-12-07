const express = require('express')

const PersonaCtrl = require('../controllers/persona-ctrl')

const router = express.Router()

router.post('/persona', PersonaCtrl.createPersona)
router.put('/persona/:id', PersonaCtrl.updatePersona)
router.delete('/persona/:id', PersonaCtrl.deletePersona)
router.get('/persona/:id', PersonaCtrl.getPersonaById)
router.get('/personas', PersonaCtrl.getPersonas)

module.exports = router