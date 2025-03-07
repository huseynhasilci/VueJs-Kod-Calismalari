// validate middleware 
const validate = require("../middlewares/validate");
const authenticateToken = require("../middlewares/authenticate");
// validations 
const schemas = require("../validations/Sections");

const express = require("express");
const { index,create,update,deleteSection } = require("../controllers/Sections");
//const { create,index,update,deleteSection } = require("../controllers/Sections");
const router = express.Router();

router.route("/:projectId").get(authenticateToken,index);
router.route("/").post(authenticateToken,validate(schemas.createValidation),create);
router.route("/:id").delete(authenticateToken,deleteSection);
router.route("/:id").patch(authenticateToken,validate(schemas.updateValidation),update);

module.exports = router;

