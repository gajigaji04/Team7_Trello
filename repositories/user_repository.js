const {User} = require('../models');

class UserRepository {
  // DB에서 email 조회
  findOneUser = async email => {
    const oneUser = await User.findOne({
      where: {email: email},
    });

    return oneUser;
  };

  // 회원 가입, DB에 회원 email, password 입력
  createUser = async (email, password) => {
    const createUserData = await User.create({email, password});

    return createUserData;
  };
}

module.exports = UserRepository;
