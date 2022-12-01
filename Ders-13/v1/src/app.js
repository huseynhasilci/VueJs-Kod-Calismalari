const express = require("express");
const fileUpload = require("express-fileupload");
const helmet = require("helmet");
const config = require("./config");
const  loaders = require("./loaders");
const events = require("./scripts/events");
const { ProjectRoutes, UserRoutes,SectionsRoutes,TaskRoutes } = require("./api-routes");
const path = require("path");



config();
loaders();
events();
const app = express();
app.use("/uploads",express.static(path.join(__dirname, "./","uploads")));
app.use(express.json());
app.use(helmet());
app.use(fileUpload());


app.listen(process.env.APP_PORT, () => {
    console.log(`${process.env.APP_PORT} üzerinde çalıştı`);
    app.use("/projects",ProjectRoutes);
    app.use("/user",UserRoutes);
    app.use("/sections",SectionsRoutes);
    app.use("/tasks",TaskRoutes);
})