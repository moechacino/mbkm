const mongoose = require("mongoose");

const CekLaporanSchema = new mongoose.Schema({
  idReport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Laporan",
    required: [true, "ID Laporan tidak boleh kosong"],
  },
  status: {
    type: String,
    enum: ["Diterima", "Ditolak", "Menunggu"],
    required: [true, "Status tidak boleh kosong"],
  },
});

const CekLaporan = mongoose.model("CekLaporan", CekLaporanSchema);

module.exports = CekLaporan;
