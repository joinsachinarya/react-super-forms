import React from "react";
import { useState } from "react";
import "./index.css";
import * as Yup from "yup";
import ReactForm from "../lib/ReactForm";
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
export var PlaceDetailsForm = function () {
    var _a = useState(false), loading = _a[0], setLoading = _a[1];
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
    return (React.createElement("div", { className: "place-details-form" },
        React.createElement(ReactForm, { config: testFormConfig, formId: "1", initialValues: {}, isInProgress: loading, validationSchema: validationSchema, actionConfig: myActionConfig, onSubmit: function (values) {
                setLoading(true);
                console.log(values);
                setTimeout(function () { return setLoading(false); }, 200);
            } })));
};
export default PlaceDetailsForm;
//# sourceMappingURL=index.js.map