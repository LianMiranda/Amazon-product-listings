import express from "express";
import axios from "axios";
import { JSDOM } from "jsdom";

const app = express();
const port = 3000;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello World");
});

app.get("/api/scrape", async (req: express.Request, res: express.Response) => {

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
