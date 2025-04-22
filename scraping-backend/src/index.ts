import express from "express";
import cors from "cors";
import { router } from "./routes/scrape.route";

export const app = express();
const port = 3000;

app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
