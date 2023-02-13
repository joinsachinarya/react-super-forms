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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Formik } from "formik";
import React from "react";
import MLFormBuilder from "../lib/ml-form-builder";
export * from "../lib/ml-form-builder/index";
export var ReactForm = function (props) {
    var config = props.config, _a = props.formId, formId = _a === void 0 ? "1" : _a, _b = props.initialValues, initialValues = _b === void 0 ? {} : _b, onSubmit = props.onSubmit, actionConfig = props.actionConfig, formSettings = props.formSettings, _c = props.isInProgress, isInProgress = _c === void 0 ? true : _c, _d = props.isReadOnly, isReadOnly = _d === void 0 ? false : _d, formikProps = __rest(props, ["config", "formId", "initialValues", "onSubmit", "actionConfig", "formSettings", "isInProgress", "isReadOnly"]);
    return (React.createElement(Formik, __assign({ initialValues: initialValues, onSubmit: onSubmit }, formikProps), function (formikProp) {
        return (React.createElement(MLFormBuilder, { schema: config, formId: formId, actionConfig: actionConfig, settings: __assign(__assign({}, formSettings), { isReadOnly: isReadOnly }), formikProps: formikProp, isInProgress: isInProgress }));
    }));
};
export default ReactForm;
//# sourceMappingURL=ReactForm.js.map