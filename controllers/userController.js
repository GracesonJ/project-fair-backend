// register

exports.register = async (req, res)=>{
    //logic
    console.log(`inside register function`);
    const {username, email, password} = req.body
    console.log(username, email, password); 

    try {
        const existingUsers = await useres.findOne({email})
        if(existingUsers){
            res.status(406).json("User Already Exists")
        }else{
            const newUser = new users({
                username:username,
                email,
                password,
                profile,
                github,
                linkedin
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
        
    } catch (error) {
        res.status(401).json(error)
    }

}

// login