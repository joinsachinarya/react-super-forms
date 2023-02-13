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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneField = void 0;
var react_1 = __importStar(require("react"));
// import "./index.scss";
var CountryList_1 = require("../Constants/CountryList");
var lodash_1 = require("lodash");
var clsx_1 = __importDefault(require("clsx"));
var HelperText_1 = require("../HelperText");
var PhoneField = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var _c = (0, react_1.useState)(""), code = _c[0], setCode = _c[1];
    var handleRenderOption = function (country, index) {
        if (!country.dial_code)
            return null;
        return (react_1.default.createElement("option", { key: index, value: country.dial_code }, "".concat(country.name, " (").concat(country.dial_code, ")")));
    };
    var label = fieldProps.label, _d = fieldProps.name, name = _d === void 0 ? "" : _d, emptyItem = fieldProps.emptyItem, emptyItemText = fieldProps.emptyItemText, countryCodeLabel = fieldProps.countryCodeLabel, classNames = fieldProps.classNames, nativeProps = fieldProps.nativeProps, placeholder = fieldProps.placeholder, disabled = fieldProps.disabled, _e = fieldProps.renderOption, renderOption = _e === void 0 ? handleRenderOption : _e;
    var value = ((0, lodash_1.get)(formikProps, "values.".concat(name)) || "");
    (0, react_1.useEffect)(function () {
        if (value) {
            setCode(value.split("-")[0] || "");
        }
    }, [name]);
    var onChange = function (event) {
        event.preventDefault();
        var number = event.target.value.replace("-", "");
        formikProps.setFieldValue("".concat(name), "".concat(code, "-").concat(number));
    };
    var handleCodeChange = function (e) {
        var number = value.split("-");
        formikProps.setFieldValue("".concat(name), "".concat(e.target.value, "-").concat(number[1] || ""));
        setCode(e.target.value);
    };
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("phone-field", classNames, name) },
        react_1.default.createElement("label", { className: "phone-field-label", id: name },
            countryCodeLabel || "Country Code",
            " ",
            label),
        react_1.default.createElement("div", { className: "phone-field-container" },
            react_1.default.createElement("div", { className: "phone-field-box" },
                react_1.default.createElement("select", { className: "phone-field-select", id: name, value: code, onChange: handleCodeChange, disabled: disabled },
                    emptyItem && react_1.default.createElement("option", { value: "" }, emptyItemText),
                    CountryList_1.COUNTRY_LIST.map(renderOption))),
            react_1.default.createElement("input", __assign({ type: "tel", className: "phone-field-input", placeholder: "".concat(placeholder || ""), name: name, onBlur: formikProps.handleBlur, autoComplete: "nope", value: value.split("-")[1] || "", onChange: onChange, disabled: disabled }, nativeProps))),
        react_1.default.createElement(HelperText_1.HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
exports.PhoneField = PhoneField;
//# sourceMappingURL=index.js.map