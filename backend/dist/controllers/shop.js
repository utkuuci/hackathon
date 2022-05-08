"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var httpStatus = require('http-status');
var Shop = require('../models/shop');
module.exports.GetShop = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    var data = yield Shop.find();
    return res.status(httpStatus.OK).send(data);
});
module.exports.CreateShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var shopData = req.body;
    const newShop = new Shop(shopData);
    yield newShop.save();
    return res.status(httpStatus.CREATED).send(shopData);
});
