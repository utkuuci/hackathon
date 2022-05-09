const QRCode = require('qrcode');
var Jimp = require("jimp");
var fs = require('fs')
var qrCode = require('qrcode-reader');



const generateQR = async (text: string) => {
    try {
        await QRCode.toFile("./qr.png", text);
        console.log(await QRCode.toString(text, { type: 'terminal' }))
    }
    catch (err) {
        console.log(err);
    }
}

const run = async () => {
    await generateQR('{name: "tolga", surname: "Yakar"}');
    var buffer = fs.readFileSync("./qr.png");
    await Jimp.read(buffer, function (err: any, image: any) {
        if (err) {
            console.error(err);
        }
        let qrcode = new qrCode();
        qrcode.callback = function (err: any, value: any) {
            if (err) {
                console.error(err);
            }
            console.log(value.result);
        };
        qrcode.decode(image.bitmap);
    });

}

run();