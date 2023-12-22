const express = require("express");
const router = express.Router();

const {
  createMahasiswa,
  login,
  dashboard,
} = require("../controllers/mahasiswa");
const authenticationMiddleware = require("../middleware/auth");
// router.route('/dashboard').get(authenticationMiddleware, )
router.route("/dashboard").get(authenticationMiddleware, dashboard);
router.route("/login").post(login);
router.route("/register").post(createMahasiswa);

module.exports = router;
