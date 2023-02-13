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
import { get } from "lodash";
import React from "react";
import "./index.css";
import clsx from "clsx";
import { HelperText } from "../HelperText";
export var TextField = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var label = fieldProps.label, _c = fieldProps.name, name = _c === void 0 ? "" : _c, _d = fieldProps.type, type = _d === void 0 ? "" : _d, classNames = fieldProps.classNames, placeholder = fieldProps.placeholder, nativeProps = fieldProps.nativeProps, disabled = fieldProps.disabled;
    var fieldValue = get(formikProps, "values.".concat(name));
    return (React.createElement("div", { className: clsx("text-field", classNames, name) },
        label && React.createElement("label", { className: "text-label" }, label),
        React.createElement("div", { className: clsx("text-field-box") },
            React.createElement("input", __assign({ className: clsx("input-box"), type: type, placeholder: "".concat(placeholder || ""), name: name, value: fieldValue || "", onBlur: formikProps.handleBlur, onChange: formikProps.handleChange, disabled: disabled }, nativeProps))),
        React.createElement(HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
//# sourceMappingURL=index.js.map