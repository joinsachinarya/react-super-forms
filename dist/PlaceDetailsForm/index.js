"use strict";
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
exports.PlaceDetailsForm = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
require("./index.css");
var Yup = __importStar(require("yup"));
var ReactForm_1 = __importDefault(require("../lib/ReactForm"));
var myActionConfig = {
    submitButtonLayout: "fullWidth"
};
var testFormConfig = [
    {
        type: "text",
        valueKey: "place",
        fieldProps: {
            label: "Name of the Place",
        },
    },
    [
        {
            type: "text",
            valueKey: "contact",
            fieldProps: {
                label: "Contact Number",
            },
        },
        {
            type: "text",
            valueKey: "rLink",
            fieldProps: {
                label: "Reservation Link",
            },
        },
    ],
    [
        {
            type: "text",
            valueKey: "tAndD",
            fieldProps: {
                label: "Takeout & Delivery",
            },
        },
        {
            type: "text",
            valueKey: "website",
            fieldProps: {
                label: "Website",
            },
        },
    ],
    [
        {
            type: "text",
            valueKey: "email",
            fieldProps: {
                label: "Email",
            },
        },
        {
            type: "text",
            valueKey: "igLink",
            fieldProps: {
                label: "Instagram Link",
            },
        },
    ],
    {
        type: "text",
        valueKey: "sDis",
        fieldProps: {
            label: "Short Description",
        },
    },
    {
        type: "text",
        valueKey: "dis",
        fieldProps: {
            label: "Description",
        },
    },
    [
        {
            type: "checkbox",
            fieldProps: {
                options: [
                    { value: "Distillery", name: "Distillery" },
                    { value: "Brewery", name: "Brewery" },
                    { value: "Restaurant", name: "Restaurant" },
                    { value: "Bar", name: "Bar" },
                    { value: "Cafe", name: "Cafe" },
                    { value: "Cooking School", name: "Cooking School" },
                    { value: "Food Hall", name: "Food Hall" },
                    { value: "Bakery", name: "Bakery" },
                    { value: "Food Truck", name: "Food Truck" },
                ],
                label: "Place Type",
                isColumn: true,
                name: "place",
                id: "",
            },
            valueKey: "placeType",
        },
        {
            type: "radio",
            fieldProps: {
                options: [
                    { value: "$", name: "$" },
                    { value: "$$", name: "$$" },
                    { value: "$$$", name: "$$$" },
                    { value: "$$$$", name: "$$$$" },
                ],
                name: "range",
                label: "$ Range",
                isColumn: true,
                id: "",
            },
            valueKey: "range",
        },
    ],
    [
        {
            type: "array",
            valueKey: "arrayText",
            fieldProps: {
                fieldArrayLabel: "Add some details",
                itemType: "text",
                defaultItemValue: "",
                arrayItemFieldProps: {
                    label: "Label",
                },
            },
        },
    ],
];
var PlaceDetailsForm = function () {
    var _a = (0, react_2.useState)(false), loading = _a[0], setLoading = _a[1];
    var validationSchema = Yup.object({
        place: Yup.array().min(1, "Required").required("Required"),
        range: Yup.string().required("Required"),
        dis: Yup.string().required("Required"),
        sDis: Yup.string().required("Required"),
        igLink: Yup.string().required("Required"),
        website: Yup.string().required("Required"),
        tAndD: Yup.string().required("Required"),
        email: Yup.string().required("Required"),
        placeType: Yup.array().min(1, "Required").required("Required"),
        rLink: Yup.string().required("Required"),
        contact: Yup.string().required("Phone number is required"),
        arrayText: Yup.array().of(Yup.string().required("At least one string is required")),
    });
    return (react_1.default.createElement("div", { className: "place-details-form" },
        react_1.default.createElement(ReactForm_1.default, { config: testFormConfig, formId: "1", initialValues: {}, isInProgress: loading, validationSchema: validationSchema, actionConfig: myActionConfig, onSubmit: function (values) {
                setLoading(true);
                console.log(values);
                setTimeout(function () { return setLoading(false); }, 200);
            } })));
};
exports.PlaceDetailsForm = PlaceDetailsForm;
exports.default = exports.PlaceDetailsForm;
//# sourceMappingURL=index.js.map