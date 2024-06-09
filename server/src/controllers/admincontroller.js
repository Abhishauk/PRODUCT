export const adminLogin = async (req, res) => {
    try {
        const { password } = req.body;
        console.log("ppppppppp",req.body); 
        if(password == "123456") {
        res.status(200).send({login:true , msg:"Login successful"});
        } else {
            return res.status(400).json({ login:false,msg:"invalid credentials"})
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
};

