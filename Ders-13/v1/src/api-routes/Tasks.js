// validate middleware 
const validate = require("../middlewares/validate");
const authenticateToken = require("../middlewares/authenticate");
// validations 
const schemas = require("../validations/Tasks");

const express = require("express");
const { index,create,update,deleteTasks,makeComment,deleteComment,addSubTask,fetchTask } = require("../controllers/Tasks");
//const { create,index,update,deleteSection } = require("../controllers/Sections");
const router = express.Router();


router.route("/").post(authenticateToken,validate(schemas.createValidation),create);
router.route("/:id").delete(authenticateToken,deleteTasks);
router.route("/:id").patch(authenticateToken,validate(schemas.updateValidation),update);
router.route("/:id/make-comment").post(authenticateToken,validate(schemas.commentValidation),makeComment);
router.route("/:id/add-sub-task").post(authenticateToken,validate(schemas.createValidation),addSubTask);
router.route("/:id/:commentId").delete(authenticateToken,deleteComment);
router.route("/:id").get(authenticateToken,fetchTask);

module.exports = router;

