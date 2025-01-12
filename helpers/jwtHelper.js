const jwt = require('jsonwebtoken');
const process = require('process');

const createToken = async (user, expire='1h') => {
    try {
        const hash = jwt.sign({userId: user?.id}, process.env.JWT_SECRET, {expiresIn: expire});
        return hash
    } catch (error) {
        console.log(error);
        throw new Error('Error creating JWT token');
    }
}

module.exports = {
    createToken
}