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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayField = void 0;
var react_1 = __importDefault(require("react"));
var lodash_1 = require("lodash");
require("./styles.scss");
var formik_1 = require("formik");
var index_1 = require("../../index");
var clsx_1 = __importDefault(require("clsx"));
var ArrayField = function (props) {
    var _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, _b = props.formikProps, formikProps = _b === void 0 ? {} : _b;
    var _c = fieldProps.addButtonText, addButtonText = _c === void 0 ? "Add" : _c, label = fieldProps.label, _d = fieldProps.name, name = _d === void 0 ? "" : _d, itemType = fieldProps.itemType, addButton = fieldProps.addButton, removeButton = fieldProps.removeButton, onAddButtonClick = fieldProps.onAddButtonClick, onRemoveButtonClick = fieldProps.onRemoveButtonClick, _e = fieldProps.arrayItemFieldProps, arrayItemFieldProps = _e === void 0 ? {} : _e, _f = fieldProps.defaultItemValue, defaultItemValue = _f === void 0 ? "" : _f, classNames = fieldProps.classNames, nativeProps = fieldProps.nativeProps, disabled = fieldProps.disabled, fieldArrayLabel = fieldProps.fieldArrayLabel;
    var values = (0, lodash_1.get)(formikProps, "values.".concat(name));
    var itemComponentConfig = (0, index_1.getComponentConfig)(itemType);
    var handleElementAdd = function (arrayHelpers) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!onAddButtonClick) {
                        arrayHelpers.push(defaultItemValue);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, onAddButtonClick()];
                case 1:
                    res = _a.sent();
                    if (res) {
                        arrayHelpers.push(res !== null && res !== void 0 ? res : {});
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleElementRemove = function (arrayHelpers, index) { return __awaiter(void 0, void 0, void 0, function () {
        var isRemoved;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!onRemoveButtonClick) {
                        arrayHelpers.remove(index);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, onRemoveButtonClick(index)];
                case 1:
                    isRemoved = _a.sent();
                    if (isRemoved)
                        arrayHelpers.remove(index);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)("array-field", classNames) },
        fieldArrayLabel && react_1.default.createElement("label", { className: "field-array-container-label" }, fieldArrayLabel),
        label && (react_1.default.createElement("label", { className: "field-array-label" }, label)),
        react_1.default.createElement(formik_1.FieldArray, { name: name, render: function (arrayHelpers) { return (react_1.default.createElement("div", null,
                (values || []).map(function (value, index) { return (react_1.default.createElement("div", { key: "".concat(fieldProps.name, "-").concat(index), className: "field-array-box" },
                    react_1.default.cloneElement(itemComponentConfig.component, __assign(__assign({ name: fieldProps.name, key: "".concat(fieldProps.name, "-").concat(index), itemIndex: index, arrayHelpers: arrayHelpers, formikProps: formikProps, fieldProps: __assign(__assign({}, arrayItemFieldProps), { name: "".concat(name, "[").concat(index, "]") }) }, itemComponentConfig.props), nativeProps)),
                    removeButton ? (removeButton) : (react_1.default.createElement("button", { className: "array-remove-icon", onClick: function () { return handleElementRemove(arrayHelpers, index); } }, react_1.default.createElement("p", { style: { fontSize: "8px" } }, "\u274C"))))); }),
                addButton ? (addButton) : (react_1.default.createElement("button", { type: "button", className: "array-add-icon", onClick: function () { return handleElementAdd(arrayHelpers); } }, addButtonText)))); } })));
};
exports.ArrayField = ArrayField;
//# sourceMappingURL=index.js.map