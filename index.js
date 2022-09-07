import express from "express";
import getCricketWorldCupsList from "./extract.js";

const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
    getCricketWorldCupsList().then((data) => {
        res.send(data);
    })
  });
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });