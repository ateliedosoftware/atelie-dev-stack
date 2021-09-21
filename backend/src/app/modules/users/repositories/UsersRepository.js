const { searchUserFunction, authenticateUserFunction, isUserMemberOfFunction, createUserFunction, updateUserFunction } = require('../../../../lib/ldapjs/UsersFunctions')

class UsersRepository  {

  constructor() {}

  async searchByUser(user) {

    const foundUser = await searchUserFunction(user)

    return foundUser;
  }

  async authenticateUser(user, password) {

    const auth = await authenticateUserFunction(user, password)

    return auth;
  }

  async isUserMemberOf(user, group) {

    const isMemberOF = await isUserMemberOfFunction(user, group)

    return isMemberOF;
  }

  async create(newDN, newUser_data) {

    const addUser = await createUserFunction(newDN, newUser_data)

    return addUser;
  }

  async update(dn, updateUser_data) {

    const updateUser = await updateUserFunction(dn, updateUser_data)

    return updateUser;
  }

  async updatePassword(dn, password) {

    const updateUserPassword = await updateUserFunction(dn, password)

    return updateUserPassword;
  }

  async enable(dn, userAccountControl) {

    const enableUser = await updateUserFunction(dn, userAccountControl)

    return enableUser;
  }

  async disable(dn, userAccountControl) {

    const enableUser = await updateUserFunction(dn, userAccountControl)

    return enableUser;
  }
}

module.exports = new UsersRepository;