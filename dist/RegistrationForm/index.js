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
exports.RegistrationForm = void 0;
var react_1 = __importStar(require("react"));
require("./index.css");
var Yup = __importStar(require("yup"));
var ReactForm_1 = __importDefault(require("../lib/ReactForm"));
var myActionConfig = {
    submitButtonLayout: "fullWidth"
};
var registrationConfig = [
    [
        {
            type: "text",
            valueKey: "fName",
            fieldProps: {
                label: "First Name",
                placeholder: "Enter First Name",
                helperText: "Please fill your first name",
            },
        },
        {
            type: "text",
            valueKey: "lName",
            fieldProps: {
                label: "Last Name",
                placeholder: "Enter last Name",
                helperText: "Please fill  your last name",
            },
        },
    ],
    [
        {
            type: "text",
            valueKey: "jobTitle",
            fieldProps: {
                label: "Job Title",
                placeholder: "Enter job title",
                helperText: "Enter job title",
            },
        },
        {
            type: "text",
            valueKey: "street",
            fieldProps: {
                label: "Street",
                placeholder: "Enter street",
                helperText: "Enter street details",
            },
        },
    ],
    {
        type: "text",
        valueKey: "postalCode",
        fieldProps: {
            label: "Postal Code",
            placeholder: "Enter postal code",
            helperText: "Enter postal code",
        },
    },
    [
        {
            type: "radio",
            valueKey: "gender",
            fieldProps: {
                options: [
                    { value: "male", name: "Male" },
                    { value: "female", name: "Female" },
                    { value: "other", name: "Other" },
                ],
                label: "Select gender",
                helperText: "Select any one option",
                isColumn: true,
            },
        },
        {
            type: "switch",
            valueKey: "toggle",
            fieldProps: {
                label: "Toggle",
                helperText: "Click for toggle",
            },
        },
    ],
    [
        {
            type: "checkbox",
            valueKey: "language",
            fieldProps: {
                options: [
                    { value: "english", name: "English" },
                    { value: "hindi", name: "Hindi" },
                    { value: "french", name: "French" },
                ],
                label: "Language",
                emptyItem: "Select something",
                helperText: "Select your language",
            },
        },
        {
            type: "phone",
            valueKey: "phoneNo",
            fieldProps: {
                helperText: "Enter your phone no.",
                placeholder: "Enter your phone no.",
            },
        },
    ],
    {
        type: "radio",
        valueKey: "relation",
        fieldProps: {
            options: [
                { value: "customer", name: "Customer" },
                { value: "partner", name: "Partner" },
                { value: "employee", name: "Employee" },
                { value: "other", name: "Other" },
            ],
            label: "Relation with Micro Focus",
            helperText: "Select any one option",
            isColumn: true,
        },
    },
    {
        type: "text",
        valueKey: "allergies",
        fieldProps: {
            label: "Do you have any allergies and/or food intolerance ?",
            fullWidth: true,
            helperText: "I hereby consent to the following information regarding allergies and intolerances being shared and processed as part of the event.",
        },
    },
    {
        type: "text",
        valueKey: "submitQuestions",
        fieldProps: {
            label: "Pre-submit your question/s here",
        },
    },
    {
        type: "checkbox",
        valueKey: "agreement",
        fieldProps: {
            // options:[
            //   { value: "Mr", name: "Mr" },
            //   { value: "Mrs", name: "Mrs" },
            //   { value: "Miss", name: "Miss" },
            // ],
            booleanLabel: "I agree to the Terms & Conditions and Privacy Policy Terms & Conditions and Privacy Policy",
        },
    },
];
var RegistrationForm = function () {
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1];
    var validation = Yup.object({
        fName: Yup.string().required("Required"),
        lName: Yup.string().required("Required"),
        jobTitle: Yup.string().required("Required"),
        street: Yup.string().required("Required"),
        postalCode: Yup.string().required("Required"),
        gender: Yup.string().required("Required"),
        phoneNo: Yup.string().required("Phone No. Required"),
        language: Yup.array().min(1, "Required").required("Required"),
        relation: Yup.string().required("Required"),
        allergies: Yup.string().required("Required"),
        submitQuestions: Yup.string().required("Required"),
        agreement: Yup.boolean().oneOf([true], 'Field must be checked').required("Required"),
    });
    return (react_1.default.createElement("div", { className: "reg-form" },
        react_1.default.createElement(ReactForm_1.default, { config: registrationConfig, formId: "1", initialValues: {}, isInProgress: loading, validationSchema: validation, 
            // actionConfig={myActionConfig}
            onSubmit: function (values) {
                setLoading(true);
                console.log(values);
                setTimeout(function () { return setLoading(false); }, 200);
            } })));
};
exports.RegistrationForm = RegistrationForm;
exports.default = exports.RegistrationForm;
//# sourceMappingURL=index.js.map