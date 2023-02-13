import { FormConfig } from "../../index";
export type TFieldConditions = {
    hidden?: boolean;
    logicOpn?: string;
    defaultProps?: object;
    postEffectProps?: object;
    values?: ConditionCompareItem[];
};
type compareValueType = string | number | boolean;
interface ConditionCompareItem {
    key: string;
    compareValue: compareValueType;
    operator: string;
}
export interface IConditionalProps {
    hidden?: boolean;
    finalProps?: object;
}
export declare const getConditionalProps: (itemConfig: FormConfig, formikProps: FormikValues) => {
    finalProps: any;
    hidden?: undefined;
} | {
    finalProps: any;
    hidden: boolean;
};
export {};
//# sourceMappingURL=index.d.ts.map