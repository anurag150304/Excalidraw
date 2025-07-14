import "dotenv/config"
import { createServer } from "http";
import App from "./app.js";
import { InitializeSocket } from "./socket.js";

const server = createServer(App);
const PORT = process.env.PORT;

InitializeSocket(server);
server.listen(PORT, () => console.log(`server listining on port ${PORT}`));