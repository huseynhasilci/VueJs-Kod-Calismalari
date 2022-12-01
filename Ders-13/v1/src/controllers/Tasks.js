const { insert, modify, list, remove,findOne } = require("../services/Tasks");
const httpStatus = require("http-status"); 
const Mongoose = require("mongoose");
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

const deleteTasks = (req,res) => {
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

const makeComment = (req,res) => {
    findOne({_id:req.params.id}).then(mainTask => {
        if(!mainTask) return res.status(httpStatus.NOT_FOUND).send({message:"Böyle bir kayıt bulunmamaktadır."})
        const comment = {
            ...req.body,
            commented_at: new Date(),
            user_id: req.user
        }
        mainTask.comments.push(comment);
        mainTask.save().then(updatedDoc => {
            return res.status(httpStatus.OK).send(updatedDoc)
        })
    })

    // req.body.user_id = req.user;
    // req.body.commented_at = new Date();
    // modify(req.body,req.params?.id).then(updatedDoc => {
    //     res.status(httpStatus.OK).send(updatedDoc);
    // })
    // .catch(e => {
    //     res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    // })

}
const deleteComment = (req,res) => {
    findOne({_id:req.params.id}).then(mainTask => {
        if(!mainTask) return res.status(httpStatus.NOT_FOUND).send({message:"Böyle bir kayıt bulunmamaktadır."})
        
        mainTask.comments = mainTask.comments.filter(c => c._id?.toString() !== req.params.commentId);
        mainTask.save().then(updatedDoc => {
            return res.status(httpStatus.OK).send(updatedDoc)
        })
    })

    // req.body.user_id = req.user;
    // req.body.commented_at = new Date();
    // modify(req.body,req.params?.id).then(updatedDoc => {
    //     res.status(httpStatus.OK).send(updatedDoc);
    // })
    // .catch(e => {
    //     res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    // })

}

const addSubTask = (req,res) => {
    //! MainTask çekilir
    if(!req.params.id) return res.status(httpStatus.BAD_REQUEST).send({message: "ID bilgisi gerekli"})
    findOne({_id:req.params.id}).then(mainTask => {
        if(!mainTask) return res.status(httpStatus.NOT_FOUND).send({message:"Böyle bir kayıt bulunmamaktadır."})
        //! Subtask create edilir
        req.body.user_id = req.user;
        insert({...req.body,user_id:req.user}).then(subTask => { //{name: "Test Project"}
            //! Subtaskın referansı main task üzerinde gösterilir ve update edilir.
            //console.log(subTask)
            mainTask.sub_tasks.push(subTask);
            console.log('object :>> ', mainTask.sub_tasks);
            mainTask.save().then(updatedDoc => {
                
                return res.status(httpStatus.OK).send(updatedDoc);
            })
        }).catch(e => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });

    })
    
    
    //! Kullanıcıya yeni doküman gönderilir
}

const fetchTask = (req,res) => {
    if(!req.params.id) return res.status(httpStatus.BAD_REQUEST).send({message: "ID bilgisi gerekli"});
    findOne({_id:req.params.id},true).then(task => {
        if(!task) return res.status(httpStatus.NOT_FOUND).send({message:"Böyle bir kayıt bulunmamaktadır."});
        res.status(httpStatus.OK).send(task);
    }).catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    })
}


module.exports= {
    create,
    index,
    update,
    deleteTasks,
    makeComment,
    deleteComment,
    addSubTask,
    fetchTask
}
