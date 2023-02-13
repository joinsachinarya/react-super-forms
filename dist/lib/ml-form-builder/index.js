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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MLFormBuilder = exports.MLFormAction = exports.MLFormContent = exports.BuildFormRow = exports.setDefaultProps = exports.attachField = exports.getComponentConfig = void 0;
var clsx_1 = __importDefault(require("clsx"));
var lodash_1 = require("lodash");
var react_1 = __importStar(require("react"));
var CheckBox_1 = require("./lib/CheckBox");
var Radio_1 = require("./lib/Radio");
var SelectField_1 = require("./lib/SelectField");
var Switch_1 = require("./lib/Switch");
var FileInput_1 = require("./lib/FileInput");
var PhoneField_1 = require("./lib/PhoneField");
var FieldArray_1 = require("./lib/FieldArray");
var TextField_1 = require("./lib/TextField");
require("./index.scss");
var ConditionalOperations_1 = require("./lib/ConditionalOperations");
var ComponentMapConfig = {};
var getComponentConfig = function (type) {
    return ComponentMapConfig[type];
};
exports.getComponentConfig = getComponentConfig;
var attachField = function (type, component, props) {
    if ((0, lodash_1.isArray)(type)) {
        (0, lodash_1.map)(type, function (item) { return (ComponentMapConfig[item] = { component: component, props: props }); });
    }
    else
        ComponentMapConfig[type] = { component: component, props: props };
};
exports.attachField = attachField;
var setDefaultProps = function (type, props) {
    var _a;
    if ((0, lodash_1.isArray)(type)) {
        (0, lodash_1.map)(type, function (item) {
            return (ComponentMapConfig[item].props = __assign(__assign({}, ComponentMapConfig[item].props), props));
        });
    }
    else if (ComponentMapConfig[type])
        ComponentMapConfig[type].props = __assign(__assign({}, (_a = ComponentMapConfig[type]) === null || _a === void 0 ? void 0 : _a.props), props);
};
exports.setDefaultProps = setDefaultProps;
(0, exports.attachField)("select", react_1.default.createElement(SelectField_1.SelectField, null));
(0, exports.attachField)("checkbox", react_1.default.createElement(CheckBox_1.CheckBox, null));
(0, exports.attachField)("switch", react_1.default.createElement(Switch_1.Switch, null));
(0, exports.attachField)("radio", react_1.default.createElement(Radio_1.Radio, null));
(0, exports.attachField)("file", react_1.default.createElement(FileInput_1.FileInput, null));
(0, exports.attachField)("phone", react_1.default.createElement(PhoneField_1.PhoneField, null));
(0, exports.attachField)("array", react_1.default.createElement(FieldArray_1.ArrayField, null));
(0, exports.attachField)("password", react_1.default.createElement(TextField_1.TextField, null), { type: "password" });
(0, exports.attachField)("text", react_1.default.createElement(TextField_1.TextField, null), { type: "text" });
var BuildFormRow = function (props) {
    var schema = props.schema, rowId = props.rowId, _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.settings, settings = _b === void 0 ? {
        horizontalSpacing: 10,
        verticalSpacing: 10,
        columnHorizontalPadding: 0,
        isReadOnly: false,
    } : _b;
    var columnItems = (0, lodash_1.get)(schema, "columns");
    var rowSettings = __assign({}, settings);
    var colItems = (0, lodash_1.isArray)(schema)
        ? schema
        : (0, lodash_1.isArray)(columnItems)
            ? columnItems
            : [schema];
    var rowStyle = { marginBottom: rowSettings.verticalSpacing || 10 };
    return (react_1.default.createElement("div", { className: "row", style: rowStyle }, (0, lodash_1.map)(colItems, function (item, index) {
        var componentConfig = ComponentMapConfig[item.type];
        var horizontalSpacing = index === colItems.length - 1
            ? 0
            : rowSettings.horizontalSpacing || 10;
        if (!componentConfig)
            return react_1.default.createElement("div", { key: "".concat(rowId, "_field_").concat(index) });
        var conditionalProps = (0, ConditionalOperations_1.getConditionalProps)(item, formikProps);
        var fieldProps = __assign(__assign(__assign({ id: item.id, name: item.name || item.valueKey }, componentConfig.props), item.fieldProps), conditionalProps.finalProps);
        var Component = componentConfig.component;
        if (conditionalProps.hidden === true)
            return react_1.default.createElement("div", { key: "".concat(rowId, "_field_").concat(index) });
        return (react_1.default.createElement("div", { key: "".concat(rowId, "_field_").concat(index), className: (0, clsx_1.default)(item.classNames, "isColumn"), style: __assign({ flex: item.flex || 1, marginRight: horizontalSpacing, paddingLeft: rowSettings.columnHorizontalPadding, paddingRight: rowSettings.columnHorizontalPadding, maxWidth: "100%" }, item.styles) }, settings.isReadOnly &&
            item.readOnlyProps &&
            (0, lodash_1.isFunction)(item.readOnlyProps.renderer)
            ? item.readOnlyProps.renderer({
                formikProps: formikProps,
                fieldConfig: item,
                isReadOnly: settings.isReadOnly,
            })
            : react_1.default.cloneElement(Component, {
                fieldProps: fieldProps,
                formikProps: formikProps,
                fieldConfig: item,
                isReadOnly: settings.isReadOnly,
            })));
    })));
};
exports.BuildFormRow = BuildFormRow;
var getUpdateSchema = function (schema, formId) {
    return (0, lodash_1.map)(schema, function (schemaItem) {
        if ((0, lodash_1.isArray)(schemaItem)) {
            return (0, lodash_1.map)(schemaItem, function (item) { return (__assign(__assign({}, item), { id: "".concat(formId, "_").concat((0, lodash_1.uniqueId)()) })); });
        }
        return __assign(__assign({}, schemaItem), { id: "".concat(formId, "_").concat((0, lodash_1.uniqueId)()) });
    });
};
var MLFormContent = function (props) {
    var schema = props.schema, formId = props.formId, formikProps = props.formikProps, settings = props.settings;
    var _a = (0, react_1.useState)(schema), formSchema = _a[0], setFormSchema = _a[1];
    (0, react_1.useEffect)(function () {
        setFormSchema(getUpdateSchema(schema, formId));
    }, [schema]);
    return (react_1.default.createElement(react_1.default.Fragment, null, (0, lodash_1.map)(formSchema, function (configRow, index) {
        var rowId = "".concat(formId, "_row_").concat(index);
        return (react_1.default.createElement(exports.BuildFormRow, { key: rowId, rowId: rowId, schema: configRow, formikProps: formikProps, settings: settings }));
    })));
};
exports.MLFormContent = MLFormContent;
var MLFormAction = function (props) {
    var formId = props.formId, _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, containerClassNames = props.containerClassNames, _b = props.submitButtonLayout, submitButtonLayout = _b === void 0 ? "center" : _b, _c = props.submitButtonText, submitButtonText = _c === void 0 ? "Submit" : _c;
    if (props.actionContent)
        return react_1.default.cloneElement(props.actionContent || react_1.default.createElement("div", null), { formikProps: formikProps });
    var layoutClassName = "action-".concat(submitButtonLayout);
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("actionContainer", layoutClassName, containerClassNames) }, props.actionContent ? (react_1.default.cloneElement(props.actionContent || react_1.default.createElement("div", null), {
        formikProps: formikProps,
        formId: formId,
    })) : (react_1.default.createElement("div", null, formikProps.isSubmitting ? (react_1.default.createElement("div", { className: "loader" })) : (react_1.default.createElement("button", { className: (0, clsx_1.default)("submit-btn", layoutClassName === "action-fullWidth"
            ? "action-fullWidth"
            : undefined), type: "submit", disabled: formikProps.isSubmitting }, submitButtonText))))));
};
exports.MLFormAction = MLFormAction;
var MLFormBuilder = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.isInProgress, isInProgress = _b === void 0 ? false : _b, _c = props.actionConfig, actionConfig = _c === void 0 ? {} : _c;
    (0, react_1.useEffect)(function () {
        if (isInProgress === false)
            formikProps.setSubmitting(false);
    }, [isInProgress]);
    return (react_1.default.createElement("form", { onSubmit: formikProps.handleSubmit },
        react_1.default.createElement(exports.MLFormContent, __assign({}, props)),
        actionConfig.displayActions !== false && (react_1.default.createElement(exports.MLFormAction, __assign({ formId: props.formId, formikProps: formikProps }, actionConfig)))));
};
exports.MLFormBuilder = MLFormBuilder;
exports.default = exports.MLFormBuilder;
//# sourceMappingURL=index.js.map