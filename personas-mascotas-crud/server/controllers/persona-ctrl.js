const Persona = require("../models/persona-model");

createPersona = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a person",
    });
  }

  const persona = new Persona(body);

  if (!persona) {
    return res.status(400).json({ success: false, error: err });
  }

  persona
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: persona._id,
        message: "Person created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Person not created!",
      });
    });
};

updatePersona = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Persona.findOne({ _id: req.params.id }, (err, persona) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Person not found!",
      });
    }
    persona.name = body.name;
    persona.last = body.last;
    persona.image = body.image;
    persona
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: persona._id,
          message: "Peron updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Person not updated!",
        });
      });
  });
};

deletePersona = async (req, res) => {
  await Persona.findOneAndDelete({ _id: req.params.id }, (err, persona) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!persona) {
      return res
        .status(404)
        .json({ success: false, error: `Person not found` });
    }

    return res.status(200).json({ success: true, data: persona });
  }).catch((err) => console.log(err));
};

getPersonaById = async (req, res) => {
  await Persona.findOne({ _id: req.params.id }, (err, persona) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!persona) {
      return res
        .status(404)
        .json({ success: false, error: `Persona not found` });
    }
    return res.status(200).json({ success: true, data: persona });
  }).catch((err) => console.log(err));
};

getPersonas = async (req, res) => {
  await Persona.find({}, (err, personas) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!personas.length) {
      return res
        .status(404)
        .json({ success: false, error: `Persona not found` });
    }
    return res.status(200).json({ success: true, data: personas });
  }).catch((err) => console.log(err));
};

module.exports = {
  createPersona,
  updatePersona,
  deletePersona,
  getPersonas,
  getPersonaById,
};
