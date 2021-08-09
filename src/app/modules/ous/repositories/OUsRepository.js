const { searchOUFunction, createOUFunction } = require('../../../../lib/ldapjs/OUsFunctions')

class OUsRepository  {

  constructor() {}

  async searchByOU(ou) {
    
    const foundOU = await searchOUFunction(ou)

    return foundOU;
  }

  async create(ou, newOU_data) {
    
    const newOU = await createOUFunction(ou, newOU_data)

    return newOU;
  }

  async list(ou) {
    
    const listOUs = await searchOUFunction(ou)

    return listOUs;
  }

}

module.exports = new OUsRepository;