"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const county_controller_1 = __importDefault(require("../controllers/county.controller"));
var router = express_1.default.Router();
router.get('/', county_controller_1.default.getList);
exports.default = router;
