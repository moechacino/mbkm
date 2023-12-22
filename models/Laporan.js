const mongoose = require("mongoose");

const LaporanSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: [true, "Nama file PDF diperlukan"],
  },
  path: {
    type: String,
    required: [true, "Path file PDF diperlukan"],
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

const Laporan = mongoose.model("Laporan", LaporanSchema);

module.exports = Laporan;
