const phone = require('phone');
const { v4: uuidv4 } = require('uuid');

class User {
    constructor(userID, name, email, poneNumber) {
        this.userID = userID
        this.name = name
        this.email = email
        this.poneNumber = poneNumber

    }




    Validation() {
        if (this.name == null || this.email == null || this.poneNumber == null) {
            throw new Error("All fields are mandatory!")
        }
        if (!this.email.includes('@') || this.email.includes(' '))
            throw new Error("Invalid email!")

        const valid = phone(this.poneNumber)
        if (!valid) {
            throw new Error("Invalid phone!")
        }
    }
}
const UsersArr = [];


 
const user1 = new User(uuidv4(), "shira", "batziongreen3320", "0548493320");
const user2 = new User(uuidv4(), "lea", "lea3320", "0533145266");
const user3 = new User(uuidv4(), "chaya", "lea3320", "0533145266");
UsersArr.push(user1,user2,user3)



function createUser( name, email, poneNumber) {
    const userId =uuidv4();
    const user = new User(userId, name, email, poneNumber);
    user.Validation()
    UsersArr.push(user)
    return user
};



function getallusers() {
    return UsersArr
}


function updateUser(userID, name, email, poneNumber) {
    const user = UsersArr.find((x) => x.userID == userID);
    if(!user)
      throw new Error("user not found")
    user.name = name;
    user.email = email;
    user.poneNumber = poneNumber;
    user.Validation();
    return user
}
function deleteUser(userID) {
    const index = UsersArr.findIndex((x) => x.userID == userID)
    if(!index)
      throw new Error("user not found")
    UsersArr.splice(index, 1)
    return index

}
function getUserbyId(userID) {
    const user = UsersArr.find((x) => x.userID == userID)
    if(!user)
       throw new Error("user not found")
    return user
}
module.exports = {
    createUser,
    getallusers,
    updateUser,
    deleteUser,
    getUserbyId
};




