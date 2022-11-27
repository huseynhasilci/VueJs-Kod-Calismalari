const { insert, modify, list, remove } = require("../services/Sections");
const httpStatus = require("http-status"); 

const create = (req,res) => {
    req.body.user_id = req.user;
    console.log('object :>> ', req.body.user_id);
    insert(req.body).then(response => { //{name: "Test Project"}
        res.status(httpStatus.CREATED).send(response);
    }).catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
    
}

const index = (req,res) => {
    if(!req?.params?.projectId) return res.status(httpStatus.BAD_REQUEST).send({error: "Proje Bilgisi eksik"});

    list({project_id:req?.params?.projectId}).then((response) => {
        res.status(httpStatus.OK).send(response);
    }).catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
    //return res.status(200).send({message:"Sectionss"});
}

const update = (req,res) => {
    console.log('req.params.id :>> ', req.params.id);
    if(!req.params?.id){
        return res.status(httpStatus.BAD_REQUEST).send({
            message: "ID bilgisi eksiktir"
        });
    }
    modify(req.body,req.params?.id).then(updatedDoc => {
        res.status(httpStatus.OK).send(updatedDoc);
    })
    .catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    })


}

const deleteSection = (req,res) => {
    if(!req.params?.id){
        return res.status(httpStatus.BAD_REQUEST).send({
            message: "ID bilgisi eksiktir"
        });
    }
    remove(req.params?.id).then(deletedProject => {
        if(!deletedProject){
            return res.status(httpStatus.NOT_FOUND).send({
                message: "Böyle bir kayıt bulunmamaktadır."
            });
        }
        
        res.status(httpStatus.OK).send({message: "Kayit silinmiştir"});
    })
    .catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    })
}


module.exports= {
    create,
    index,
    update,
    deleteSection
}
