const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 8080;

//middle ware for posting
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT,() => {
    console.log(`app is listening on http://localhost${PORT}`)
})
// app.post("/api/tool", (req, res)=>{
//     fs.readFile("tools.json", "utf-8", (err,data) => {
//       if (err) throw err;
//       console.log(data)
//     })
//     console.log(req.body)
//     // res.end()
//   })


// app.get("/api/config", (req,res)=>{
//     res.json({
//         success: true
//     })
// })
