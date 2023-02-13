import clsx from "clsx";
import React from "react";
import { getFieldError } from "../../Utils";
import "./index.css";
export var HelperText = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var name = fieldProps.name, helperText = fieldProps.helperText, classNames = fieldProps.classNames;
    var fieldError = getFieldError(name || "", formikProps);
    return (React.createElement("div", { className: clsx("text-error-helper-field", classNames, name) }, (fieldError || helperText) && (React.createElement("div", { className: "label-error" }, fieldError ? (React.createElement("span", { className: "error-text error" }, fieldError)) : (React.createElement("span", { className: "helper-text" },
        helperText,
        " "))))));
};
//# sourceMappingURL=index.js.map