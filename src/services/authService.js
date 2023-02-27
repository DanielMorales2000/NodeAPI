const { json } = require("body-parser");
const authInfo = require("../database/auth.json");
const jwt = require('jsonwebtoken');
const dotenv = require ('dotenv').config();

const authVerify = (userName, password) => {
    
    if (authInfo.userName !== userName || authInfo.password !== password ) {
        return false;
    }
    return true;
}

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.SECRET || 'secretpassword', {expiresIn: '5m'}) 
}

const validateToken = (req, res, next) => {
    var accessToken = req.headers['authorization'];

    if (!accessToken) {
        res.send('Access denied');
        return;
    }

    if (accessToken.includes('Bearer ')) {
        accessToken = accessToken.replace('Bearer ', '');
    }

    jwt.verify(accessToken, process.env.SECRET || "secretpassword", (err, user) => {
        if(err){
            res.send('Access denied, token expired or incorrect');
        } else {
            next();
        }
    })
}

module.exports = {authVerify, generateAccessToken, validateToken}