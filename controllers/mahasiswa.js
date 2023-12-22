const Mahasiswa = require("../models/Mahasiswa");
const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//registrasi
const createMahasiswa = async (req, res) => {
  let data = req.body;
  if (!data.tanggalLahir) {
    console.log(data);
  }
  if (data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    const mahasiswa = await Mahasiswa.create(data);
    console.log(mahasiswa);
    res.status(201).json(mahasiswa);
  }
};

//loign
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please input username and password");
  }
  const mahasiswa = await Mahasiswa.findOne({ username });
  if (mahasiswa && bcrypt.compareSync(password, mahasiswa.password)) {
    const { _id } = mahasiswa;
    const token = jwt.sign({ id: _id, username }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.status(200).json({ msg: "user created", token });
  } else {
    res.json({ msg: "wrong username and password" });
  }
};

const dashboard = async (req, res) => {
  const uname = req.user.username;
  const num = Math.random() * Math.random();
  res.json({ msg: `Hello ${uname}, here is your number ${num}` });
};

module.exports = { createMahasiswa, login, dashboard };
