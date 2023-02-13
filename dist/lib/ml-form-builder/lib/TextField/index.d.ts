import React from "react";
import "./index.css";
import { FieldItemProps, FieldProps } from "../Types";
export interface TextFieldProps extends FieldItemProps {
    type?: string;
    placeholder?: string;
}
interface TextFieldsProps extends FieldProps {
    fieldProps?: TextFieldProps;
}
export declare const TextField: React.FC<TextFieldsProps>;
export {};
//# sourceMappingURL=index.d.ts.map