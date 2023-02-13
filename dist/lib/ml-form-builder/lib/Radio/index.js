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
exports.Radio = void 0;
var lodash_1 = require("lodash");
var react_1 = __importDefault(require("react"));
// import "./index.css";
var clsx_1 = __importDefault(require("clsx"));
var HelperText_1 = require("../HelperText");
var Radio = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var _c = fieldProps.options, options = _c === void 0 ? [] : _c, _d = fieldProps.name, name = _d === void 0 ? "" : _d, label = fieldProps.label, isColumn = fieldProps.isColumn, classNames = fieldProps.classNames, nativeProps = fieldProps.nativeProps, disabled = fieldProps.disabled;
    var fieldValue = (0, lodash_1.get)(formikProps, "values.".concat(name)) || "";
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("radio-field", classNames) },
        label && react_1.default.createElement("span", { className: "radio-label" }, label),
        react_1.default.createElement("div", { className: (0, clsx_1.default)("radio-container", isColumn ? "isColumn" : undefined) }, options.map(function (it) { return (react_1.default.createElement("span", { key: it.value, className: "radio-name" },
            react_1.default.createElement("input", __assign({ className: "radio-input", type: "radio", name: name, value: it.value, checked: fieldValue === it.value, onChange: formikProps.handleChange, disabled: disabled }, nativeProps)),
            it.name)); })),
        react_1.default.createElement(HelperText_1.HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
exports.Radio = Radio;
//# sourceMappingURL=index.js.map