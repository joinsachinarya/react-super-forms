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
import React, { useEffect, useState } from "react";
import "./index.scss";
import { COUNTRY_LIST } from "../Constants/CountryList";
import { get } from "lodash";
import clsx from "clsx";
import { HelperText } from "../HelperText";
export var PhoneField = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var _c = useState(""), code = _c[0], setCode = _c[1];
    var handleRenderOption = function (country, index) {
        if (!country.dial_code)
            return null;
        return (React.createElement("option", { key: index, value: country.dial_code }, "".concat(country.name, " (").concat(country.dial_code, ")")));
    };
    var label = fieldProps.label, _d = fieldProps.name, name = _d === void 0 ? "" : _d, emptyItem = fieldProps.emptyItem, emptyItemText = fieldProps.emptyItemText, countryCodeLabel = fieldProps.countryCodeLabel, classNames = fieldProps.classNames, nativeProps = fieldProps.nativeProps, placeholder = fieldProps.placeholder, disabled = fieldProps.disabled, _e = fieldProps.renderOption, renderOption = _e === void 0 ? handleRenderOption : _e;
    var value = (get(formikProps, "values.".concat(name)) || "");
    useEffect(function () {
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
    return (React.createElement("div", { className: clsx("phone-field", classNames, name) },
        React.createElement("label", { className: "phone-field-label", id: name },
            countryCodeLabel || "Country Code",
            " ",
            label),
        React.createElement("div", { className: "phone-field-container" },
            React.createElement("div", { className: "phone-field-box" },
                React.createElement("select", { className: "phone-field-select", id: name, value: code, onChange: handleCodeChange, disabled: disabled },
                    emptyItem && React.createElement("option", { value: "" }, emptyItemText),
                    COUNTRY_LIST.map(renderOption))),
            React.createElement("input", __assign({ type: "tel", className: "phone-field-input", placeholder: "".concat(placeholder || ""), name: name, onBlur: formikProps.handleBlur, autoComplete: "nope", value: value.split("-")[1] || "", onChange: onChange, disabled: disabled }, nativeProps))),
        React.createElement(HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
//# sourceMappingURL=index.js.map