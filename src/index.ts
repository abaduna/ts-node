import express from "express"

const app = express()

app.use(express.json())

const PORT =3000

app.get("/ping",(_req,res)=>{
    console.log(`someone pinged herre` , new Date().toLocaleDateString()   );
    res.send("`ping")
})
import diaryRouter from "./routes/diaries"

app.use("/api/diaries",diaryRouter)
app.listen(PORT,()=>{
    console.log(`server runnig on port ${PORT}`);
    
})