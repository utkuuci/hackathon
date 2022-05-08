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
var mongoose = require('mongoose');
module.exports = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(`mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    catch (e) {
        console.log(e);
    }
});
