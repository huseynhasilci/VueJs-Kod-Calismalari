const { insert, modify, list } = require("../services/Projects");
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
    console.log('req.user :>> ', req.user);
    list().then((response) => {
        res.status(httpStatus.OK).send(response);
    }).catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
    
}

const update = (req,res) => {
    console.log('req.params.id :>> ', req.params.id);
    if(!req.params?.id){
        return res.status(httpStatus.BAD_REQUEST).send({
            message: "ID bilgisi eksiktir"
        });
    }
    modify(req.body,req.params?.id).then(updatedProject => {
        res.status(httpStatus.OK).send(updatedProject);
    })
    .catch(e => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    })


}


module.exports= {
    create,
    index,
    update
}
