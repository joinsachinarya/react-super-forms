import React from "react";
import { FieldItemProps, FieldProps, Option } from "../Types";
export interface RadioFieldProps extends FieldItemProps {
    options?: Option[];
    isColumn?: boolean;
}
interface RadioProps extends FieldProps {
    fieldProps?: RadioFieldProps;
}
export declare const Radio: React.FC<RadioProps>;
export {};
