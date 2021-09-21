const { searchGroupFunction, createGroupFunction, addUserToGroupFunction } = require('../../../../lib/ldapjs/GroupsFunctions')

class GroupsRepository  {

  constructor() {}

  async searchByGroup(group) {
    
    const foundGroup = await searchGroupFunction(group)

    return foundGroup;
  }

  async create(newGroup_dn, newGroup_data) {
    
    const newGroup = await createGroupFunction(newGroup_dn, newGroup_data)

    return newGroup;
  }

  async addUserToGroup(group_dn, user) {
    
    const addToGroup = await addUserToGroupFunction(group_dn, user)

    return addToGroup;
  }

  async list(group) {
    
    const listaAllGroups = await searchGroupFunction(group)

    return listaAllGroups;
  }

  

}

module.exports = new GroupsRepository;