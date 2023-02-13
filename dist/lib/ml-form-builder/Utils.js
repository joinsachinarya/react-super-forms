"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponentConfig = exports.setValue = exports.processFilesWithCallback = exports.getFieldError = exports.getMenuOptions = void 0;
var lodash_1 = require("lodash");
var getMenuOptions = function (options) {
    return (0, lodash_1.map)(options, function (item) {
        if ((0, lodash_1.isString)(item))
            return { name: item, value: item };
        return item;
    });
};
exports.getMenuOptions = getMenuOptions;
var getFieldError = function (fieldName, formikProps) {
    var fieldError = (0, lodash_1.get)(formikProps, "errors.".concat(fieldName));
    var isTouched = (0, lodash_1.get)(formikProps, "touched.".concat(fieldName));
    if (!isTouched && formikProps.submitCount < 1)
        return "";
    return fieldError;
};
exports.getFieldError = getFieldError;
var processFilesWithCallback = function (files, callback, readAs, encoding) {
    var imgFiles = [];
    var remFiles = [];
    Array.from(files).forEach(function (file) {
        var reader = new FileReader();
        reader.onload = function () {
            var fileInfo = {
                name: file.name,
                type: file.type,
                size: Math.round(file.size / 1024) + " kB",
                base64: file.type.includes("image") ? reader.result : null,
                file: file,
            };
            if (file.type.includes("image")) {
                imgFiles.push(fileInfo);
            }
            else {
                remFiles.push(file);
            }
            if (imgFiles.length + remFiles.length === files.length) {
                callback({ imgs: imgFiles, rem: remFiles });
            }
        };
        reader[readAs || "readAsDataURL"](file, encoding);
        // This works but remember only readAsText can take encoding as a parameter. Might want to mention this in the documentation.
    });
};
exports.processFilesWithCallback = processFilesWithCallback;
var setValue = function (value, formikProps, fieldProps) {
    formikProps.setFieldValue((0, lodash_1.get)(fieldProps, "name"), value);
};
exports.setValue = setValue;
var ComponentMapConfig = {};
var getComponentConfig = function (type) {
    return ComponentMapConfig[type];
};
exports.getComponentConfig = getComponentConfig;
//# sourceMappingURL=Utils.js.map