var UserRepository =require('../../repository/user');

module.exports.createUser = (user) => {
   return UserRepository.addUser(user);
    
}

module.exports.checkUser =  (user) => {
    return UserRepository.checkUser(user);

}
module.exports.getUser =  (user) => {
    return UserRepository.getUser(user);

}
