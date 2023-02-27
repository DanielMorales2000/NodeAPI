const express = require('express');
const v1PersonRouter = require("./v1/routes/personRoutes")

const app = express();
const PORT= process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/people", v1PersonRouter);

app.listen(PORT, ()=>{
    console.log('Server running in port '+PORT)
})