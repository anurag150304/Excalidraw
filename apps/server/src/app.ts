import express, { Express, Request, Response, urlencoded } from "express";
import { errHandler } from "@repo/types/errorTypes"

const App: Express = express();

App.use(express.json());
App.use(urlencoded({ extended: true }));

App.get("/", (req: Request, res: Response) => {
    res.send("Welcome to excalidraw API");
});

App.use((err: errHandler, req: Request, res: Response) => {
    const { message, status = 500 } = err;
    return res.status(status).json({ error: message });
});

export default App;