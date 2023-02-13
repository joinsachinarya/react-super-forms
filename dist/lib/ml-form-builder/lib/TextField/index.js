"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
var lodash_1 = require("lodash");
var react_1 = __importDefault(require("react"));
require("./index.css");
var clsx_1 = __importDefault(require("clsx"));
var HelperText_1 = require("../HelperText");
var TextField = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var label = fieldProps.label, _c = fieldProps.name, name = _c === void 0 ? "" : _c, _d = fieldProps.type, type = _d === void 0 ? "" : _d, classNames = fieldProps.classNames, placeholder = fieldProps.placeholder, nativeProps = fieldProps.nativeProps, disabled = fieldProps.disabled;
    var fieldValue = (0, lodash_1.get)(formikProps, "values.".concat(name));
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("text-field", classNames, name) },
        label && react_1.default.createElement("label", { className: "text-label" }, label),
        react_1.default.createElement("div", { className: (0, clsx_1.default)("text-field-box") },
            react_1.default.createElement("input", __assign({ className: (0, clsx_1.default)("input-box"), type: type, placeholder: "".concat(placeholder || ""), name: name, value: fieldValue || "", onBlur: formikProps.handleBlur, onChange: formikProps.handleChange, disabled: disabled }, nativeProps))),
        react_1.default.createElement(HelperText_1.HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
exports.TextField = TextField;
//# sourceMappingURL=index.js.map