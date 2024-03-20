const {userList}=require('./fakedata');

const  resolvers={
  Query:{
    users(){
      return userList;

    }

  }
}
module.exports={resolvers}
