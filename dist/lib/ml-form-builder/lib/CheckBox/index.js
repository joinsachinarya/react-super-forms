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
exports.CheckBox = void 0;
var react_1 = __importDefault(require("react"));
// import "./index.css";
var lodash_1 = require("lodash");
var clsx_1 = __importDefault(require("clsx"));
var HelperText_1 = require("../HelperText");
var CheckBox = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var _c = fieldProps.options, options = _c === void 0 ? [] : _c, _d = fieldProps.name, name = _d === void 0 ? "" : _d, label = fieldProps.label, _e = fieldProps.isColumn, isColumn = _e === void 0 ? false : _e, classNames = fieldProps.classNames, nativeProps = fieldProps.nativeProps, disabled = fieldProps.disabled, booleanLabel = fieldProps.booleanLabel;
    var fieldValue = (0, lodash_1.get)(formikProps, "values.".concat(name, " ||  []"));
    var booleanValue = (0, lodash_1.get)(formikProps, "values.".concat(name, " "));
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("checkbox-field ", classNames) },
        label && react_1.default.createElement("span", { className: "checkbox-label" }, label),
        react_1.default.createElement("div", { className: (0, clsx_1.default)("checkbox-container", isColumn ? "isColumn" : undefined) }, (!(0, lodash_1.isEmpty)(options)) ?
            ((0, lodash_1.map)(options, function (item, index) {
                return (react_1.default.createElement("div", { key: "".concat(item.value, "-").concat(index), className: "checkbox-name" },
                    react_1.default.createElement("input", __assign({ className: "checkbox-input", type: "checkbox", name: name, value: item.value, checked: fieldValue === null || fieldValue === void 0 ? void 0 : fieldValue.includes(item.value), onChange: formikProps.handleChange, disabled: disabled }, nativeProps)),
                    item.name));
            })) : (react_1.default.createElement("div", { className: "checkbox-name" },
            react_1.default.createElement("input", __assign({ className: "checkbox-input", type: "checkbox", name: name, value: "false", checked: booleanValue, onBlur: formikProps.handleBlur, onChange: formikProps.handleChange, disabled: disabled }, nativeProps)),
            booleanLabel))),
        react_1.default.createElement(HelperText_1.HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
exports.CheckBox = CheckBox;
//# sourceMappingURL=index.js.map