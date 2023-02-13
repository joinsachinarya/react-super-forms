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
export var Radio = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var _c = fieldProps.options, options = _c === void 0 ? [] : _c, _d = fieldProps.name, name = _d === void 0 ? "" : _d, label = fieldProps.label, isColumn = fieldProps.isColumn, classNames = fieldProps.classNames, nativeProps = fieldProps.nativeProps, disabled = fieldProps.disabled;
    var fieldValue = get(formikProps, "values.".concat(name)) || "";
    return (React.createElement("div", { className: clsx("radio-field", classNames) },
        label && React.createElement("span", { className: "radio-label" }, label),
        React.createElement("div", { className: clsx("radio-container", isColumn ? "isColumn" : undefined) }, options.map(function (it) { return (React.createElement("span", { key: it.value, className: "radio-name" },
            React.createElement("input", __assign({ className: "radio-input", type: "radio", name: name, value: it.value, checked: fieldValue === it.value, onChange: formikProps.handleChange, disabled: disabled }, nativeProps)),
            it.name)); })),
        React.createElement(HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
//# sourceMappingURL=index.js.map