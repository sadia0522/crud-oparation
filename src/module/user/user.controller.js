const { getUserService, createUserService, userLoginService } = require("./user.service");

const createUser = async (req, res) => {
  try {
    const create = await createUserService(req.body);
    if (!create) {
      res.status(404).json({ message: "creation failed!" });
    }
    res.status(200).json(create);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await getUserService();
    if (!user) {
      res.status(404).json({
        message: "user not found",
      });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
 
const userLogin = async (req ,res) => {
    try {
        const login = await userLoginService(req.body);
    if(!login.user || !login.authPassword) {
        res.status(404).json({message: 'invalid cridentials try again'});

    }
    res.status(200).json({message: 'login successful'});

        
    } catch (error) {
         console.log(error);
    res.status(500).json({ message: "internal server error" });
  }

 };
    




module.exports = { createUser ,getUser, userLogin};
