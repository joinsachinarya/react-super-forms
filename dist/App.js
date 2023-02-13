"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./App.css");
var RegistrationForm_1 = __importDefault(require("./RegistrationForm"));
var PlaceDetailsForm_1 = __importDefault(require("./PlaceDetailsForm"));
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(PlaceDetailsForm_1.default, null),
        react_1.default.createElement(RegistrationForm_1.default, null)));
}
exports.default = App;
//# sourceMappingURL=App.js.map