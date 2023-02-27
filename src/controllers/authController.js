const authService = require('../services/authService');

const authVerify = (req, res) => {
    const {userName, password} = req.body;
    const authenticationState = authService.authVerify(userName, password)
    if (!authenticationState) {
        res.status(400).send({status: "FAILED", data: {error:"Credenciales Incorrectas"}});
        return;
    }

    const user = {username: userName};
    const accessToken = authService.generateAccessToken(user);

    res.header('authorization', accessToken).json({
        message: 'Usuario autenticado',
        token: accessToken
    });

    return;
}

module.exports = {
    authVerify
}