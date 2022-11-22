// validate middleware 
const validate = require("../middlewares/validate");
const authenticateToken = require("../middlewares/authenticate");
// validations 
const schemas = require("../validations/Projects");

const express = require("express");
const { create,index } = require("../controllers/Projects");
const router = express.Router();

router.route("/").get(authenticateToken,index);

router.route("/").post(authenticateToken,validate(schemas.createValidation),create);

module.exports = router;

