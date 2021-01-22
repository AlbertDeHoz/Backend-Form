const {User} = require('../models');
const {validationResult} = require('express-validator');
const token = require('../services/token')


exports.list = async (req,res) => {
    const user = await User.findAll();
    return res.json(user)
};

exports.register = async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors:errors.array()});
    };
    const userExist =  await User.findOne({ where : { id: req.body.id}});
    if (!userExist){
        const user = await User.create(req.body);
        res.json(user);
    }
    else {
        res.status(422).json({error:'user already exists'})
    }
}

exports.signin = async (req, res, next) => {
    const user =  await User.findOne({ where : { id: req.body.id}});  
    if (user){
        const tokenUser = token.encode(user);
        res.status(200).json({tokenUser});
    }
    else{
        res.status(404).send('User Not Found');
    }
    next();
}

