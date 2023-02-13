"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperText = void 0;
var clsx_1 = __importDefault(require("clsx"));
var react_1 = __importDefault(require("react"));
var Utils_1 = require("../../Utils");
var HelperText = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var name = fieldProps.name, helperText = fieldProps.helperText, classNames = fieldProps.classNames;
    var fieldError = (0, Utils_1.getFieldError)(name || "", formikProps);
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("text-error-helper-field", classNames, name) }, (fieldError || helperText) && (react_1.default.createElement("div", { className: "label-error" }, fieldError ? (react_1.default.createElement("span", { className: "error-text error" }, fieldError)) : (react_1.default.createElement("span", { className: "helper-text" },
        helperText,
        " "))))));
};
exports.HelperText = HelperText;
//# sourceMappingURL=index.js.map