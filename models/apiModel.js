const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    category: { type: String, required: true },
    tags: [String],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("API", apiSchema);
