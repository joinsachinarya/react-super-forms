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
import clsx from "clsx";
import { get, isArray, isFunction, map, uniqueId } from "lodash";
import React, { useEffect, useState } from "react";
import { CheckBox } from "./lib/CheckBox";
import { Radio } from "./lib/Radio";
import { SelectField } from "./lib/SelectField";
import { Switch } from "./lib/Switch";
import { FileInput } from "./lib/FileInput";
import { PhoneField } from "./lib/PhoneField";
import { ArrayField } from "./lib/FieldArray";
import { TextField } from "./lib/TextField";
import "./index.css";
import { getConditionalProps, } from "./lib/ConditionalOperations";
var ComponentMapConfig = {};
export var getComponentConfig = function (type) {
    return ComponentMapConfig[type];
};
export var attachField = function (type, component, props) {
    if (isArray(type)) {
        map(type, function (item) { return (ComponentMapConfig[item] = { component: component, props: props }); });
    }
    else
        ComponentMapConfig[type] = { component: component, props: props };
};
export var setDefaultProps = function (type, props) {
    var _a;
    if (isArray(type)) {
        map(type, function (item) {
            return (ComponentMapConfig[item].props = __assign(__assign({}, ComponentMapConfig[item].props), props));
        });
    }
    else if (ComponentMapConfig[type])
        ComponentMapConfig[type].props = __assign(__assign({}, (_a = ComponentMapConfig[type]) === null || _a === void 0 ? void 0 : _a.props), props);
};
attachField("select", React.createElement(SelectField, null));
attachField("checkbox", React.createElement(CheckBox, null));
attachField("switch", React.createElement(Switch, null));
attachField("radio", React.createElement(Radio, null));
attachField("file", React.createElement(FileInput, null));
attachField("phone", React.createElement(PhoneField, null));
attachField("array", React.createElement(ArrayField, null));
attachField("password", React.createElement(TextField, null), { type: "password" });
attachField("text", React.createElement(TextField, null), { type: "text" });
export var BuildFormRow = function (props) {
    var schema = props.schema, rowId = props.rowId, _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.settings, settings = _b === void 0 ? {
        horizontalSpacing: 10,
        verticalSpacing: 10,
        columnHorizontalPadding: 0,
        isReadOnly: false,
    } : _b;
    var columnItems = get(schema, "columns");
    var rowSettings = __assign({}, settings);
    var colItems = isArray(schema)
        ? schema
        : isArray(columnItems)
            ? columnItems
            : [schema];
    var rowStyle = { marginBottom: rowSettings.verticalSpacing || 10 };
    return (React.createElement("div", { className: "row", style: rowStyle }, map(colItems, function (item, index) {
        var componentConfig = ComponentMapConfig[item.type];
        var horizontalSpacing = index === colItems.length - 1
            ? 0
            : rowSettings.horizontalSpacing || 10;
        if (!componentConfig)
            return React.createElement("div", { key: "".concat(rowId, "_field_").concat(index) });
        var conditionalProps = getConditionalProps(item, formikProps);
        var fieldProps = __assign(__assign(__assign({ id: item.id, name: item.name || item.valueKey }, componentConfig.props), item.fieldProps), conditionalProps.finalProps);
        var Component = componentConfig.component;
        if (conditionalProps.hidden === true)
            return React.createElement("div", { key: "".concat(rowId, "_field_").concat(index) });
        return (React.createElement("div", { key: "".concat(rowId, "_field_").concat(index), className: clsx(item.classNames, "isColumn"), style: __assign({ flex: item.flex || 1, marginRight: horizontalSpacing, paddingLeft: rowSettings.columnHorizontalPadding, paddingRight: rowSettings.columnHorizontalPadding, maxWidth: "100%" }, item.styles) }, settings.isReadOnly &&
            item.readOnlyProps &&
            isFunction(item.readOnlyProps.renderer)
            ? item.readOnlyProps.renderer({
                formikProps: formikProps,
                fieldConfig: item,
                isReadOnly: settings.isReadOnly,
            })
            : React.cloneElement(Component, {
                fieldProps: fieldProps,
                formikProps: formikProps,
                fieldConfig: item,
                isReadOnly: settings.isReadOnly,
            })));
    })));
};
var getUpdateSchema = function (schema, formId) {
    return map(schema, function (schemaItem) {
        if (isArray(schemaItem)) {
            return map(schemaItem, function (item) { return (__assign(__assign({}, item), { id: "".concat(formId, "_").concat(uniqueId()) })); });
        }
        return __assign(__assign({}, schemaItem), { id: "".concat(formId, "_").concat(uniqueId()) });
    });
};
export var MLFormContent = function (props) {
    var schema = props.schema, formId = props.formId, formikProps = props.formikProps, settings = props.settings;
    var _a = useState(schema), formSchema = _a[0], setFormSchema = _a[1];
    useEffect(function () {
        setFormSchema(getUpdateSchema(schema, formId));
    }, [schema]);
    return (React.createElement(React.Fragment, null, map(formSchema, function (configRow, index) {
        var rowId = "".concat(formId, "_row_").concat(index);
        return (React.createElement(BuildFormRow, { key: rowId, rowId: rowId, schema: configRow, formikProps: formikProps, settings: settings }));
    })));
};
export var MLFormAction = function (props) {
    var formId = props.formId, _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, containerClassNames = props.containerClassNames, _b = props.submitButtonLayout, submitButtonLayout = _b === void 0 ? "center" : _b, _c = props.submitButtonText, submitButtonText = _c === void 0 ? "Submit" : _c;
    if (props.actionContent)
        return React.cloneElement(props.actionContent || React.createElement("div", null), { formikProps: formikProps });
    var layoutClassName = "action-".concat(submitButtonLayout);
    return (React.createElement("div", { className: clsx("actionContainer", layoutClassName, containerClassNames) }, props.actionContent ? (React.cloneElement(props.actionContent || React.createElement("div", null), {
        formikProps: formikProps,
        formId: formId,
    })) : (React.createElement("div", null, formikProps.isSubmitting ? (React.createElement("div", { className: "loader" })) : (React.createElement("button", { className: clsx("submit-btn", layoutClassName === "action-fullWidth"
            ? "action-fullWidth"
            : undefined), type: "submit", disabled: formikProps.isSubmitting }, submitButtonText))))));
};
export var MLFormBuilder = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.isInProgress, isInProgress = _b === void 0 ? false : _b, _c = props.actionConfig, actionConfig = _c === void 0 ? {} : _c;
    useEffect(function () {
        if (isInProgress === false)
            formikProps.setSubmitting(false);
    }, [isInProgress]);
    return (React.createElement("form", { onSubmit: formikProps.handleSubmit },
        React.createElement(MLFormContent, __assign({}, props)),
        actionConfig.displayActions !== false && (React.createElement(MLFormAction, __assign({ formId: props.formId, formikProps: formikProps }, actionConfig)))));
};
export default MLFormBuilder;
//# sourceMappingURL=index.js.map