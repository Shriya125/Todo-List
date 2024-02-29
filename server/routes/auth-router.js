const express = require("express");
const router = express.Router();
const {add, get, home, update, deleteRecord} = require("../controllers/auth-controller");


// Routes
router.route("/").get(home);

router.route("/add").post(add);

router.route("/get").get(get);

router.route("/update/:id").put(update);

router.route("/delete/:id").delete(deleteRecord);

module.exports = router;