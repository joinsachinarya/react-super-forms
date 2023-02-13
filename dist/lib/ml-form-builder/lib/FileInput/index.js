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
import { processFilesWithCallback, setValue, } from "../../Utils";
import clsx from "clsx";
import "./index.css";
import { HelperText } from "../HelperText";
export var FileInput = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var _c = fieldProps.name, name = _c === void 0 ? "" : _c, onDone = fieldProps.onDone, multiple = fieldProps.multiple, disableDefaultTooltip = fieldProps.disableDefaultTooltip, accept = fieldProps.accept, readAs = fieldProps.readAs, disabled = fieldProps.disabled, onFilesChange = fieldProps.onFilesChange, nativeProps = fieldProps.nativeProps, _d = fieldProps.encoding, encoding = _d === void 0 ? "utf-8" : _d, label = fieldProps.label, classNames = fieldProps.classNames;
    var handleChange = function (event) {
        var files = event.target.files || new FileList();
        if (onFilesChange) {
            onFilesChange(files);
            setValue(files, formikProps, fieldProps);
        }
        processFilesWithCallback(files, function (prop) {
            var imgs = prop.imgs, rem = prop.rem;
            onDone === null || onDone === void 0 ? void 0 : onDone(imgs, rem);
            var files = [].concat(imgs || []).concat(rem || []);
            setValue(files, formikProps, fieldProps);
        }, readAs, encoding);
    };
    return (React.createElement("div", { className: clsx("file-input-field", classNames) },
        label && (React.createElement("label", { htmlFor: name, className: "file-input-label" }, label)),
        React.createElement("div", { className: "upload-btn-wrapper" },
            React.createElement("input", __assign({ className: "file-input-box", type: "file", onChange: handleChange, id: name, disabled: disabled, multiple: multiple, title: disableDefaultTooltip ? " " : undefined, accept: accept }, nativeProps)),
            React.createElement("button", { className: "btn", type: "button" }, "Upload")),
        React.createElement(HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
//# sourceMappingURL=index.js.map