const User = require("../models/Users");


const insert = (data) => {
    const user = new User(data);

    //(console.log(projectData);
    return user.save();
}

const list = () => {
    return User.find({});
}

const loginUser = (loginData) => {
    return User.findOne(loginData);
}

const modify = (where,data) => {
    //! gelen data üzerinden bilgilari filitrelemek bu işlemi joi bizim için yapıyor
    //! öğrenmek amaçlı yapılmıştır
    // const updateData = Object.keys(data).reduce((obj,key)=> {
    //     if(key !== "password") obj[key] = data[key];
    //     return obj;
    // },{});
    // return User.findOneAndUpdate(where,updateData, {new:true});
    return User.findOneAndUpdate(where,data, {new:true});
}


module.exports = {
    insert,
    list,
    loginUser,
    modify
}