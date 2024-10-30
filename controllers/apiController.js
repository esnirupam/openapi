const API = require("../models/apiModel");

exports.getAllAPIs = async (req, res) => {
    try {
        const apis = await API.find();
        res.json(apis);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addAPI = async (req, res) => {
    try {
        const api = new API({ ...req.body, createdBy: req.user.id });
        await api.save();
        res.status(201).json(api);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
