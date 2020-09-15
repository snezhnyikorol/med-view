"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var http_1 = __importDefault(require("http"));
var express_1 = __importDefault(require("express"));
var main_1 = __importDefault(require("./router/main"));
var PORT = 3000;
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/static', express_1.default.static(path_1.default.join(__dirname, 'static')));
app.use('/', main_1.default);
var server = http_1.default.createServer(app);
server.listen(PORT);
server.on('error', function (error) {
    console.error("Error HTTPD Server: " + error.message);
    process.exit();
});
server.on('listening', function () {
    console.info('Application listening on http://localhost:' + PORT);
});
//# sourceMappingURL=index.js.map