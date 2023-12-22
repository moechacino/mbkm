const mongoose = require("mongoose");

const PengajuanSchema = new mongoose.Schema({
  suratPermohonan: {
    type: String,
    required: [true, "Surat permohonan tidak boleh kosong"],
  },
  tempatKP: {
    type: String,
    required: [true, "Tempat KP tidak boleh kosong"],
  },
  proposal: {
    type: String,
    required: [true, "Proposal tidak boleh kosong"],
  },
  tanggalPengajuan: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Diterima", "Ditolak", "Menunggu"],
    default: "Menunggu",
  },
});

const Pengajuan = mongoose.model("Pengajuan", PengajuanSchema);

module.exports = Pengajuan;
