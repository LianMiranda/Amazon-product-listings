import express from "express";
import { router } from "./routes/scrape.route";

export const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
