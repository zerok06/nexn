"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = __importDefault(require("./routes/auth"));
var morgan_1 = __importDefault(require("morgan"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
// Variables de entorno
app.set('port', PORT);
// Configuración de express
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)('dev'));
// Levantamiento de API
app.use('/api', auth_1.default);
exports.default = app;
