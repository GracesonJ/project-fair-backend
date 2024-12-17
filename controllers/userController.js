// register

exports.register = (req, res)=>{
    //logic
    const {username, email, Password} = req.body
    console.log(username, email, Password);
    
    console.log(`inside register function`);
    res.send(`end`)
    
}