const Tasks = require("../models/Tasks");

const findOne = (where,expand) => {
    if(!expand)return Tasks.findOne(where);
    return Tasks.findOne(where).populate({
        path:"user_id",
        select: "full_name email photo"
    }).populate({
        path:"comments",
        populate: {
            path:"user_id",
            select: "full_name email photo",

        }
    }).populate({
        path:"sub_tasks",
        select: "title description isCompleted assigned_to due_date order sub_tasks statuses",
    });
}

const insert = (projectData) => {
    const section = new Tasks({
        ...projectData
    })
    //(console.log(projectData);
    return section.save();
}

const list = (where) => {
    return Tasks.find(where || {}).populate({
        path: "user_id",
        select: "full_name email photo",
    }).populate({
        path: "project_id",
        select: "name",
    });
}

const modify = (data,id) => {
    console.log(data)
    return Tasks.findByIdAndUpdate(id,data,{new: true});
    // return Section.findById(id)
    // .then(project => {
    //     project.name = data?.name;
    //     return project.save();
    // })
    // .catch(e => {

    // })
}

const remove = (id) => {
    return Tasks.findByIdAndDelete(id);
}

module.exports = {
    insert,
    list,
    modify,
    remove,
    findOne
}