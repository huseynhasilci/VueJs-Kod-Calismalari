const Mongoose = require("mongoose");
const logger = require("../scripts/logger/Project");

const ProjectSchema = new Mongoose.Schema({
    name: String,
    user_id: {
        type: Mongoose.Types.ObjectId,
        ref:"user",
    }
}, { timestamps:true, versionKey:false });

// ProjectSchema.pre("save", (doc,next) => {
//     console.log("Öncesi",doc);
//     next();
// })

ProjectSchema.post("save", (doc) => {
    //console.log("Sonrası",doc);
    logger.log({
        level: "info",
        message: doc
    })
    //next();
})

module.exports = Mongoose.model("project",ProjectSchema);


