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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileInput = void 0;
var react_1 = __importDefault(require("react"));
var Utils_1 = require("../../Utils");
var clsx_1 = __importDefault(require("clsx"));
var HelperText_1 = require("../HelperText");
var FileInput = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var _c = fieldProps.name, name = _c === void 0 ? "" : _c, onDone = fieldProps.onDone, multiple = fieldProps.multiple, disableDefaultTooltip = fieldProps.disableDefaultTooltip, accept = fieldProps.accept, readAs = fieldProps.readAs, disabled = fieldProps.disabled, onFilesChange = fieldProps.onFilesChange, nativeProps = fieldProps.nativeProps, _d = fieldProps.encoding, encoding = _d === void 0 ? "utf-8" : _d, label = fieldProps.label, classNames = fieldProps.classNames;
    var handleChange = function (event) {
        var files = event.target.files || new FileList();
        if (onFilesChange) {
            onFilesChange(files);
            (0, Utils_1.setValue)(files, formikProps, fieldProps);
        }
        (0, Utils_1.processFilesWithCallback)(files, function (prop) {
            var imgs = prop.imgs, rem = prop.rem;
            onDone === null || onDone === void 0 ? void 0 : onDone(imgs, rem);
            var files = [].concat(imgs || []).concat(rem || []);
            (0, Utils_1.setValue)(files, formikProps, fieldProps);
        }, readAs, encoding);
    };
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("file-input-field", classNames) },
        label && (react_1.default.createElement("label", { htmlFor: name, className: "file-input-label" }, label)),
        react_1.default.createElement("div", { className: "upload-btn-wrapper" },
            react_1.default.createElement("input", __assign({ className: "file-input-box", type: "file", onChange: handleChange, id: name, disabled: disabled, multiple: multiple, title: disableDefaultTooltip ? " " : undefined, accept: accept }, nativeProps)),
            react_1.default.createElement("button", { className: "btn", type: "button" }, "Upload")),
        react_1.default.createElement(HelperText_1.HelperText, { fieldProps: fieldProps, formikProps: formikProps })));
};
exports.FileInput = FileInput;
//# sourceMappingURL=index.js.map