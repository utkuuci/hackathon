var fs = require('fs')
var httpStatus = require('http-status');
var QRCode = require('qrcode');
var path = require('path');
var Receipt: any = require('../models/receipt');

const generateQR = async (text: string) => {
    try {
        await QRCode.toFile(path.join(__dirname, '..', '..', 'image', `${new Date().toISOString()}.png`), text);
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
}

module.exports.GetReceipt = async (_: any, res: any) => {
    var data: any = await Receipt.find();
    res.status(httpStatus.OK).send(data);
}

module.exports.CreateReceipt = async (req: any, res: any) => {
    var receipt: any = new Receipt(req.body);
    await receipt.save();
    return res.status(httpStatus.CREATED).send(req.body);
}

module.exports.GenerateQrImage = async (req: any, res: any) => {
    const istrue = await generateQR(JSON.stringify(req.body));
    if (istrue) {
        return res.status(httpStatus.CREATED).send({
            success: true
        })
    }
    else {
        return res.status(httpStatus.BAD_REQUEST).send({
            success: false
        })
    }
}

module.exports.GetUserReceipt = async (req: any, res: any) => {
    console.log(req.params);
    const receipts = await Receipt.find({ userId: req.params.id });
    console.log(receipts);
    res.status(httpStatus.OK).send(receipts);
}