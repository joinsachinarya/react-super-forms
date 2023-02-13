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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectField = void 0;
var react_1 = __importDefault(require("react"));
var lodash_1 = require("lodash");
require("./index.scss");
var clsx_1 = __importDefault(require("clsx"));
var HelperText_1 = require("../HelperText");
var SelectField = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var _c = fieldProps.name, name = _c === void 0 ? "" : _c, label = fieldProps.label, _d = fieldProps.options, options = _d === void 0 ? [] : _d, emptyItem = fieldProps.emptyItem, nativeProps = fieldProps.nativeProps, classNames = fieldProps.classNames, disabled = fieldProps.disabled;
    var emptyItemText = (0, lodash_1.isString)(emptyItem) ? emptyItem : "No option selected";
    var optionList = emptyItem
        ? __spreadArray([{ value: "", name: emptyItemText }], options, true) : options;
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("select-field", classNames) },
        label && (react_1.default.createElement("label", { htmlFor: name, className: "select-field-label" }, label)),
        react_1.default.createElement("div", { className: "select-container" },
            react_1.default.createElement("select", __assign({ id: name, onChange: formikProps.handleChange, className: "select-option", disabled: disabled }, nativeProps), optionList.map(function (it) {
                return (react_1.default.createElement("option", __assign({ key: it.value, value: it.value }, nativeProps), it.name));
            }))),
        react_1.default.createElement(HelperText_1.HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
exports.SelectField = SelectField;
//# sourceMappingURL=index.js.map