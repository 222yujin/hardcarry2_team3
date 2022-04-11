const express = require('express');
const router = express.Router();
const models = require("../models")
const balance = models.back_balance;


const getItems = async (req, res) => {
    const item = await models.back_item.findAll();
    res.send(item);
}

module.exports = {getItems}