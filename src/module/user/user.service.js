const userModel = require('./user.model');
const bcrypt = require('bcrypt');


const getUserService = async () => {
    const user = await userModel.find();
    return user;
};

const createUserService = async (data) => {   
    const {username ,email ,password} = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = await userModel.create({username ,email ,password: hashedPassword});
    return createUser;
};

const userLoginService = async (data) => {
    const {username ,password} = data;
    const user = await userModel.findOne({username});
    if(!user) {
        return ({user:false});
    }
    const authPassword = bcrypt.compare(password ,user.password);
    if(!authPassword) {
        return ({authPassword: false});
    }
    
    return ({user: true , authPassword: true});
}



module.exports = {getUserService,createUserService, userLoginService};