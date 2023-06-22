class User{
    constructor(userID,name,email,poneNumber){
        this.userID=userID
        this.name=name
        this.email=email
        this.poneNumber=poneNumber
      
    }
  
}
const UsersArr=[];
const user1=new User(2,"shira","batziongreen3320","0548493320");
UsersArr.push(user1)
function createUser(userID,name,email,poneNumber){
    const user2=new User(userID,name,email,poneNumber);
    UsersArr.push(user2)
    return user2
}
function getallusers(){
    return UsersArr
}
function updateUser(userID,name,email,poneNumber){
    const user=UsersArr.find((x)=>x.userID==userID)
    user.name=name
    user.email=email
    user.poneNumber=poneNumber
    return user
}
function deleteUser(userID){
    const index=UsersArr.findIndex((x)=>x.userID==userID)
    UsersArr.splice(index,1)//תמחוק במקום הindex אלמנט אחד

}
function getUserbyId(userID){
    const user=UsersArr.find((x)=>x.userID==userID) 
    return user
}
module.exports={
    createUser,
    getallusers,
    updateUser,
    deleteUser,
    getUserbyId
};




