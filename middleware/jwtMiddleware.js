

const jwtMiddleware = (req, res, next) =>{
    console.log(`inside jwt middleware`);
    const token = req.headers['authorization'].split(' ')[1]
    console.log(token);
    
    next()
}

module.exports = jwtMiddleware