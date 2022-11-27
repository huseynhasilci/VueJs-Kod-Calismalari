const Section = require("../models/Section");


const insert = (projectData) => {
    const section = new Section({
        ...projectData
    })
    //(console.log(projectData);
    return section.save();
}

const list = (where) => {
    return Section.find(where || {}).populate({
        path: "user_id",
        select: "full_name email photo",
    }).populate({
        path: "project_id",
        select: "name",
    });
}

const modify = (data,id) => {
    console.log(data)
    return Section.findByIdAndUpdate(id,data,{new: true});
    // return Section.findById(id)
    // .then(project => {
    //     project.name = data?.name;
    //     return project.save();
    // })
    // .catch(e => {

    // })
}

const remove = (id) => {
    return Section.findByIdAndDelete(id);
}

module.exports = {
    insert,
    list,
    modify,
    remove
}