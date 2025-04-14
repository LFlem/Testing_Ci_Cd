"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// npm i http
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/") {
        const html = `
            <html>
                <head>
                    <title>My First Page</title>
                    <link rel="stylesheet" href="/public/css/styles.css"/>
                </head>
                <div class="app__message">
                    <h1>Hello World.</h1>
                </div>
            </html>
        `;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    }
    else if (req.url === "/public/css/styles.css") {
        fs_1.default.readFile("./public/css/styles.css", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/css" });
                res.end("File not found");
            }
            else {
                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(data);
            }
        });
    }
});
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
