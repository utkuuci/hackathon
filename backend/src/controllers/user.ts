var httpStatus = require('http-status');
var User: any = require('../models/user');

module.exports.GetUser = async (_: any, res: any) => {
    var data: any = await User.find();
    return res.status(httpStatus.OK).send(data);
}

module.exports.CreateUser = async (req: any, res: any) => {
    var user = req.body;
    const newUser = new User(user);
    await newUser.save();
    return res.status(httpStatus.CREATED).send(user);
}
module.exports.GetSingleUser = async (req: any, res: any) => {
    var user = await User.findOne({ _id: req.params.id });
    return res.status(httpStatus.OK).send(user);
}