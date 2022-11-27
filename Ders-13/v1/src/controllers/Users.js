const { insert, list, loginUser,modify,remove } = require("../services/Users");
const projectService = require("../services/Projects");
const httpStatus = require("http-status"); 
const { passwordToHash, generateAccessToken, generateRefreshToken } = require("../scripts/utils/helper");
const { response } = require("express");
const uuid = require("uuid");
const eventEmitter = require("../scripts/events/eventEmitter");
const path = require("path");

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

const changePassword = (req,res) => {
    // if(!req.user){
    //     return res.status(httpStatus.).send({error: "Bu işlemi yapabilmek için ilk olarak giriş yapmalısınız"})
    // }
    //! UI geldikten sonra şifre karşılaştırmalarına ilişkin kurallar burada yer alacaktır 
    req.body.password = passwordToHash(req.body.password);
    modify({_id:req.user?._id},req.body).then(updatedUser => {
        res.status(httpStatus.OK).send(updatedUser);
    })
    .catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: "Güncelleme işlemi sırasında bir problem meydana geldi"})
    })
}

const deleteUser = (req,res) => {
    if(!req.params?.id){
        return res.status(httpStatus.BAD_REQUEST).send({
            message: "ID bilgisi eksiktir"
        });
    }
    remove(req.params?.id).then(deletedUser => {
        if(!deletedUser){
            return res.status(httpStatus.NOT_FOUND).send({
                message: "Böyle bir kayıt bulunmamaktadır."
            });
        }
        
        res.status(httpStatus.OK).send({message: "Kayıt silinmiştir"});
    })
    .catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    })
}

const updateProfileImage = (req,res) => {
    //! 1- resim kontrolü
     // express fileuploadı dahil edince bu şekilde geliyor
    console.log(req.files);
    if(!req?.files?.photo){
        return res.status(httpStatus.BAD_REQUEST).send({error:"Bu işlemi yapabilmek için yeterli veriye sahip değiliz"});
    }
    //const fileName = req?.user?._id
    //! 2- upload işlemi
    const extension = path.extname(req.files.photo.name);
    const fileName = `${req?.user._id}${extension}`
    const folderPath = path.join(__dirname,"../","uploads/users",fileName);
    req.files.photo.mv(folderPath, function(err) {
        if(err){
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error:err});
        }
        modify({_id : req.user._id},{photo: fileName}).then(updatedUser => {
            res.status(httpStatus.OK).send(updatedUser);
        }).catch(e => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: "Upload başarılıo fakat kayıt sırasında bir sorun oluştu"});
        })
    });
    
    //! 3- DB save işlemi
    //! 4- response gönderme
}

module.exports= {
    create,
    index,
    login,
    projectList,
    resetPassword,
    update,
    deleteUser,
    changePassword,
    updateProfileImage
}
