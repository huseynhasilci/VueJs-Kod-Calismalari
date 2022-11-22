const Mongoose = require("mongoose");
const logger = require("../scripts/logger/Project");

const UserSchema = new Mongoose.Schema({
    full_name: String,
    password: String,
    email: String,
    photo: String
}, { timestamps:true, versionKey:false });

// ProjectSchema.pre("save", (doc,next) => {
//     console.log("Öncesi",doc);
//     next();
// })

UserSchema.post("save", (doc) => {
    //console.log("Sonrası",doc);
    logger.log({
        level: "info",
        message: doc
    })
    //next();
})

module.exports = Mongoose.model("user",UserSchema);


