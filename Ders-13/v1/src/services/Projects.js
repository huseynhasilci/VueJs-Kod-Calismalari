const Projects = require("../models/Projects");


const insert = (projectData) => {
    const projects = new Projects({
        ...projectData
    })
    //(console.log(projectData);
    return projects.save();
}

const list = (where) => {
    return Projects.find(where || {}).populate({
        path: "user_id",
        select: "full_name email photo",
    });
}

const modify = (data,id) => {
    console.log(data)
    return Projects.findByIdAndUpdate(id,data,{new: true});
    // return Projects.findById(id)
    // .then(project => {
    //     project.name = data?.name;
    //     return project.save();
    // })
    // .catch(e => {

    // })
}

const remove = (id) => {
    return Projects.findByIdAndDelete(id);
}

module.exports = {
    insert,
    list,
    modify,
    remove
}