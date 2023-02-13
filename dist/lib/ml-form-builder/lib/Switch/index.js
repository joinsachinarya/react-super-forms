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
exports.Switch = void 0;
var react_1 = __importDefault(require("react"));
require("./index.css");
var lodash_1 = require("lodash");
var clsx_1 = __importDefault(require("clsx"));
var HelperText_1 = require("../HelperText");
var Switch = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var label = fieldProps.label, _c = fieldProps.name, name = _c === void 0 ? "" : _c, classNames = fieldProps.classNames, nativeProps = fieldProps.nativeProps, disabled = fieldProps.disabled;
    var fieldValue = (0, lodash_1.get)(formikProps, "values.".concat(name));
    var handleOnChange = function () {
        formikProps.setFieldValue("".concat(name), !fieldValue);
    };
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("switch-field", classNames) },
        label && react_1.default.createElement("span", { className: "switch-label" }, label),
        react_1.default.createElement("label", { className: "switch-container" },
            react_1.default.createElement("input", __assign({ className: "slider", type: "checkbox", checked: !!fieldValue, value: fieldValue, onChange: handleOnChange, disabled: disabled }, nativeProps)),
            react_1.default.createElement("span", { className: "slider round" })),
        react_1.default.createElement(HelperText_1.HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
exports.Switch = Switch;
//# sourceMappingURL=index.js.map