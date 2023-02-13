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
import { get, isEmpty, map } from "lodash";
import clsx from "clsx";
import { HelperText } from "../HelperText";
export var CheckBox = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var _c = fieldProps.options, options = _c === void 0 ? [] : _c, _d = fieldProps.name, name = _d === void 0 ? "" : _d, label = fieldProps.label, _e = fieldProps.isColumn, isColumn = _e === void 0 ? false : _e, classNames = fieldProps.classNames, nativeProps = fieldProps.nativeProps, disabled = fieldProps.disabled, booleanLabel = fieldProps.booleanLabel;
    var fieldValue = get(formikProps, "values.".concat(name, " ||  []"));
    var booleanValue = get(formikProps, "values.".concat(name, " "));
    return (React.createElement("div", { className: clsx("checkbox-field ", classNames) },
        label && React.createElement("span", { className: "checkbox-label" }, label),
        React.createElement("div", { className: clsx("checkbox-container", isColumn ? "isColumn" : undefined) }, (!isEmpty(options)) ?
            (map(options, function (item, index) {
                return (React.createElement("div", { key: "".concat(item.value, "-").concat(index), className: "checkbox-name" },
                    React.createElement("input", __assign({ className: "checkbox-input", type: "checkbox", name: name, value: item.value, checked: fieldValue === null || fieldValue === void 0 ? void 0 : fieldValue.includes(item.value), onChange: formikProps.handleChange, disabled: disabled }, nativeProps)),
                    item.name));
            })) : (React.createElement("div", { className: "checkbox-name" },
            React.createElement("input", __assign({ className: "checkbox-input", type: "checkbox", name: name, value: "false", checked: booleanValue, onBlur: formikProps.handleBlur, onChange: formikProps.handleChange, disabled: disabled }, nativeProps)),
            booleanLabel))),
        React.createElement(HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
//# sourceMappingURL=index.js.map