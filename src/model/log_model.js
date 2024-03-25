const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema(
  {
    guid: {
      type: String,
      required: true,
    },
    guid_device: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Number,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const LogModel = mongoose.model("logDataSensor", LogSchema);

module.exports = LogModel;
