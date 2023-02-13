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
import React from "react";
import "./index.css";
import { get } from "lodash";
import clsx from "clsx";
import { HelperText } from "../HelperText";
export var Switch = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var label = fieldProps.label, _c = fieldProps.name, name = _c === void 0 ? "" : _c, classNames = fieldProps.classNames, nativeProps = fieldProps.nativeProps, disabled = fieldProps.disabled;
    var fieldValue = get(formikProps, "values.".concat(name));
    var handleOnChange = function () {
        formikProps.setFieldValue("".concat(name), !fieldValue);
    };
    return (React.createElement("div", { className: clsx("switch-field", classNames) },
        label && React.createElement("span", { className: "switch-label" }, label),
        React.createElement("label", { className: "switch-container" },
            React.createElement("input", __assign({ className: "slider", type: "checkbox", checked: !!fieldValue, value: fieldValue, onChange: handleOnChange, disabled: disabled }, nativeProps)),
            React.createElement("span", { className: "slider round" })),
        React.createElement(HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
//# sourceMappingURL=index.js.map