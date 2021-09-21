function getAttributeName(ou) {

    const arrayOuData = ou.split(",")
    const ouName = arrayOuData[0].split("=")
    const attr_name = ouName[1]

    return attr_name
}


function formatAttributesNewUserData(fullname, matricula, cpf, mail, ou) {

     // tratar variaveis - fazer uma função pra isso
     const arrayNames = fullname.split(" ")
     let nome = arrayNames[0]
     arrayNames.pop()
     let sobrenome = arrayNames.join(' ');
     nome = nome.toUpperCase();
     sobrenome = sobrenome.toUpperCase();
     fullname = fullname.toUpperCase();

     const newUser_data = {
        givenName: nome, 
        sn: sobrenome,
        cn: fullname,
        displayName: fullname,
        sAMAccountName: cpf, 
        mail: mail, 
        userPrincipalName: `${cpf}@campus.sertao.ifrs.edu.br`,
        userAccountControl: 512,
        postalCode: cpf, 
        objectClass: ['top', 'posixGroup', 'person', 'organizationalPerson', 'user']
    };

    return newUser_data

}


function formatAttributesUpdateNewUserData(fullname, matricula, cpf, mail, ou, nisDomain, new_msSFU30MaxUidNumber) {

    const matricula_no_zeros = matricula.replace(/^0+/, '');

    const newUser_unixAttributes = {
        msSFU30Name: cpf,
        msSFU30NisDomain: nisDomain,
        uid: matricula, 
        postOfficeBox: matricula_no_zeros, 
        uidNumber: new_msSFU30MaxUidNumber,
        gidNumber: 10000,
        loginShell: '/bin/bash',
        pwdLastSet: 0,
        unixHomeDirectory: `/home/${cpf}`,
        password: cpf,
    };

    return newUser_unixAttributes

}
module.exports = { getAttributeName, formatAttributesNewUserData, formatAttributesUpdateNewUserData }