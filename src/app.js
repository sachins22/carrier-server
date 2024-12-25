import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// import file 
// import troute from "./routes/text.route.js"

// import file 2 
// import route2 from "./route2/pass.route.js";




//routes declaration
// app.use('/api',troute)


//routes2 declaration
// app.use("/api",route2);


// http://localhost:2200/api/pass


export { app }