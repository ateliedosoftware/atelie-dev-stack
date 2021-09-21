require('dotenv').config()
const { getMsSFU30MaxUidNumber, updateMsSFU30MaxUidNumber } = require('../../../../../lib/ldapjs/OthersFunctions');
const { getAttributeName, formatAttributesNewUserData, formatAttributesUpdateNewUserData } = require('../../../../../lib/utils');
const AppError = require('../../../../../shared/errors/AppError');
const OUsRepository = require('../../../ous/repositories/OUsRepository');
const usersRepository = require('../../repositories/UsersRepository')

const nisDomain = process.env.NIS_DOMAIN;

class CreateGroupService {

    constructor() { }

    async execute(fullname, matricula, cpf, mail, ou) {

        const dataToCreate = formatAttributesNewUserData(fullname, matricula, cpf, mail, ou)

        const dn = `CN=${dataToCreate.cn}`;
        const newDN = `${dn},${ou}`;  
        const newUser_data = {...dataToCreate}

        const ouAttributeName = getAttributeName(ou)

        const foundOU = await OUsRepository.searchByOU(ouAttributeName)
        
        if (!foundOU) {
            throw new AppError(404, `The OU ${ou} does not exists!`);
        };

        const userAlreadyExists = await usersRepository.searchByUser(cpf)
        
        if (userAlreadyExists) {
            throw new AppError(404, `The user ${fullname} already exists!`);
        };

        const newUser = await usersRepository.create(newDN, newUser_data)

        if (!newUser) {
            throw new AppError(500, `The user ${dataToCreate.cn} cannot be created!`);
        };

        const { msSFU30MaxUidNumber } = await getMsSFU30MaxUidNumber();
        if (!msSFU30MaxUidNumber) {
            throw new AppError(401, `The msSFU30MaxUidNumber cannot be found!`);

        }
        const new_msSFU30MaxUidNumber = parseInt(msSFU30MaxUidNumber) + 1;

        const dataToUpdate = formatAttributesUpdateNewUserData(fullname, matricula, cpf, mail, ou, nisDomain, new_msSFU30MaxUidNumber)

        const newUser_unixAttributes = { ...dataToUpdate }

        const updateUser = await usersRepository.update(newDN, newUser_unixAttributes)

        if (!updateUser) {
            throw new AppError(500, `The user ${dataToCreate.cn} cannot be updated!`);
        };

         const update_MsSFU30MaxUidNumber = await updateMsSFU30MaxUidNumber(new_msSFU30MaxUidNumber);
         if (!update_MsSFU30MaxUidNumber) {
            throw new AppError(401, `The msSFU30MaxUidNumber cannot be updated!`);
         };

        return { ...newUser_data, ...newUser_unixAttributes}
    }
}

module.exports = new CreateGroupService;
