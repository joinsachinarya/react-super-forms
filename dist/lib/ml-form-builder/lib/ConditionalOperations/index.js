"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConditionalProps = void 0;
var lodash_1 = require("lodash");
var compare = function (value1, operator, value2) {
    switch (operator) {
        case ">":
            return value1 > value2;
        case "<":
            return value1 < value2;
        case ">=":
            return value1 >= value2;
        case "<=":
            return value1 <= value2;
        case "==":
            return value1 == value2;
        case "!=":
            return value1 != value2;
        case "===":
            return value1 === value2;
        case "!==":
            return value1 !== value2;
        default:
            return false;
    }
};
var getConditionalOutput = function (itemCondition, formikProps) {
    var itemValue = (0, lodash_1.get)(formikProps, "values.".concat(itemCondition.key));
    return compare(itemValue, itemCondition.operator, itemCondition.compareValue);
};
var hasTruthyValue = function (logicalOperation, values, formikProps) {
    if (logicalOperation === void 0) { logicalOperation = "AND"; }
    var outputResult = false;
    (0, lodash_1.forEach)(values, function (item, index) {
        var result = getConditionalOutput(item, formikProps);
        if (logicalOperation === "AND" && !result) {
            outputResult = false;
            return false;
        }
        if (logicalOperation === "OR" && result) {
            outputResult = true;
            return false;
        }
        if (index === values.length - 1) {
            outputResult = logicalOperation === "AND" ? true : false;
        }
        return;
    });
    return outputResult;
};
var getConditionalProps = function (itemConfig, formikProps) {
    var conditionInstructions = itemConfig.condition;
    if (!conditionInstructions || (0, lodash_1.isEmpty)(conditionInstructions.values)) {
        return { finalProps: {} };
    }
    var isValidCondition = hasTruthyValue(conditionInstructions.logicOpn, conditionInstructions.values || [], formikProps);
    //console.log('Conditional props valid condition', isValidCondition);
    if (isValidCondition) {
        /*
            IF CONDITION IS TRUE THEN RETURN THE TRUTHY PROPS ELSE RETURN THE DEFAULT PROPS
            */
        return { finalProps: conditionInstructions.postEffectProps };
    }
    else {
        if (conditionInstructions.hidden === true)
            return { finalProps: conditionInstructions.defaultProps, hidden: true };
        else
            return { finalProps: conditionInstructions.defaultProps };
    }
};
exports.getConditionalProps = getConditionalProps;
//# sourceMappingURL=index.js.map