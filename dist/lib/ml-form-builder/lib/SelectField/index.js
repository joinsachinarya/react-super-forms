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
import React from "react";
import { isString } from "lodash";
import "./index.css";
import clsx from "clsx";
import { HelperText } from "../HelperText";
export var SelectField = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var _c = fieldProps.name, name = _c === void 0 ? "" : _c, label = fieldProps.label, _d = fieldProps.options, options = _d === void 0 ? [] : _d, emptyItem = fieldProps.emptyItem, nativeProps = fieldProps.nativeProps, classNames = fieldProps.classNames, disabled = fieldProps.disabled;
    var emptyItemText = isString(emptyItem) ? emptyItem : "No option selected";
    var optionList = emptyItem
        ? __spreadArray([{ value: "", name: emptyItemText }], options, true) : options;
    return (React.createElement("div", { className: clsx("select-field", classNames) },
        label && (React.createElement("label", { htmlFor: name, className: "select-field-label" }, label)),
        React.createElement("div", { className: "select-container" },
            React.createElement("select", __assign({ id: name, onChange: formikProps.handleChange, className: "select-option", disabled: disabled }, nativeProps), optionList.map(function (it) {
                return (React.createElement("option", __assign({ key: it.value, value: it.value }, nativeProps), it.name));
            }))),
        React.createElement(HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
//# sourceMappingURL=index.js.map