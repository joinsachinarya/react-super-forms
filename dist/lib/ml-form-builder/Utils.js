import { map, isString, get } from "lodash";
export var getMenuOptions = function (options) {
    return map(options, function (item) {
        if (isString(item))
            return { name: item, value: item };
        return item;
    });
};
export var getFieldError = function (fieldName, formikProps) {
    var fieldError = get(formikProps, "errors.".concat(fieldName));
    var isTouched = get(formikProps, "touched.".concat(fieldName));
    if (!isTouched && formikProps.submitCount < 1)
        return "";
    return fieldError;
};
export var processFilesWithCallback = function (files, callback, readAs, encoding) {
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
export var setValue = function (value, formikProps, fieldProps) {
    formikProps.setFieldValue(get(fieldProps, "name"), value);
};
var ComponentMapConfig = {};
export var getComponentConfig = function (type) {
    return ComponentMapConfig[type];
};
//# sourceMappingURL=Utils.js.map