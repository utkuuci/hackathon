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
var User = require('../models/user');
module.exports.GetUser = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    var data = yield User.find();
    return res.status(httpStatus.OK).send(data);
});
module.exports.CreateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var user = req.body;
    const newUser = new User(user);
    yield newUser.save();
    return res.status(httpStatus.CREATED).send(user);
});
