const http = require("http");
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const router = require("./routes/user/user")
constmysql = require("mysql2")

app.set('views', path.join(__dirname))
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded())

/*const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'epytodo'
});*/

app.use(express.static(__dirname + '/public/'))

app.get("/", (req, res, next) => {
    res.render("code")
})

app.use("/api/use", router);

app.use((req, res, next) => {
    res.send("loading test");
})
app.listen(3000)