const { insert, list, loginUser,modify } = require("../services/Users");
const projectService = require("../services/Projects");
const httpStatus = require("http-status"); 
const { passwordToHash, generateAccessToken, generateRefreshToken } = require("../scripts/utils/helper");
const { response } = require("express");
const uuid = require("uuid");
const eventEmitter = require("../scripts/events/eventEmitter");


const create = (req,res) => {

    //const cryptedPassword = passwordToHash(req.body.password);
    req.body.password = passwordToHash(req.body.password);

    insert(req.body).then(response => { //{name: "Test Project"}
        res.status(httpStatus.CREATED).send(response);
    }).catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
        
} 

const login = (req,res) => {
    req.body.password = passwordToHash(req.body.password);
    loginUser(req.body).then(user => {
        if (!user){
            return res.status(httpStatus.NOT_FOUND).send({message:"Böyle bir kullanıcı yok"})
        }
        user = {
            ...user.toObject(),
            tokens:{
                access_token: generateAccessToken(user),
                refresh_token: generateRefreshToken(user)
            }
        }
        delete user.password;
        res.status(httpStatus.OK).send(user);
    })
    .catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    })
}

const index = (req,res) => {
    list().then((response) => {
        res.status(httpStatus.OK).send(response);
    }).catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
    
}

const projectList = (req,res) => {
    
    projectService.list({user_id: req.user?._id}).then(projects => {
        res.status(httpStatus.OK).send(projects);
    })
    .catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    })
}

const resetPassword = (req,res) => {
    //eventEmitter.emit("send_email","Buda benim datam");
    //return false;
    const new_password = uuid.v4()?.split("-")[0] || `usr-${new Date().getTime()}`
    modify({email:req.body.email},{password:passwordToHash(new_password)}).then(updatedUser => {
        if(!updatedUser){
            return res.status(httpStatus.NOT_FOUND).send({error: "Böyle bir kullanıcı bulunmamaktadır"});
        }
        eventEmitter.emit("send_email",{ 
            to: updatedUser.email, // list of receivers
            subject: "Sifre sifirlama ✔", // Subject line
            html: `Talebiniz üzerine şifre sıfırlama işleminiz gerçekleşmiştir <br /> Giriş Yaptıktan sonra şifrenizi değiştirmeyi unutmayın <br /> ${new_password} <b>Hello world?</b>`,
        });
        res.status(httpStatus.OK).send({
            message: "Şifre sıfırmala işlemi için sisteme kayıtlı e-posta adresinize gerekej bilgileri gönderdik"
        })
    })
    .catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: "sifre resetleme sirasinda bir sorun olustu"});
    })
}


const update = (req,res) => {
    // if(!req.user){
    //     return res.status(httpStatus.).send({error: "Bu işlemi yapabilmek için ilk olarak giriş yapmalısınız"})
    // }
    modify({_id:req.user?._id},req.body).then(updatedUser => {
        res.status(httpStatus.OK).send(updatedUser);
    })
    .catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: "Güncelleme işlemi sırasında bir problem meydana geldi"})
    })
}


module.exports= {
    create,
    index,
    login,
    projectList,
    resetPassword,
    update
}
