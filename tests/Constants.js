/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use strict";

/**
 * Example values of all types.
 */
export const ExampleValues = {
   BigInt: 1n,
   Boolean: true,
   Function: () => "function",
   Null: null,
   Number: 2,
   Object: { object: "object" },
   String: "string",
   Symbol: Symbol("symbol"),
   Undefined: undefined,
};
Object.freeze(ExampleValues.Object);
Object.freeze(ExampleValues.Null);
Object.freeze(ExampleValues);

/**
 * List of example values of all types.
 */
export const AllTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Null,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.String,
   ExampleValues.Symbol,
   ExampleValues.Undefined,
];
Object.freeze(AllTypesExampleValues);

/**
 * List of example values of all types except null.
 */
export const NonNullTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.String,
   ExampleValues.Symbol,
   ExampleValues.Undefined,
];
Object.freeze(NonNullTypesExampleValues);

/**
 * List of example values of all types except string.
 */
export const NonStringTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Null,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.Symbol,
   ExampleValues.Undefined,
];
Object.freeze(NonStringTypesExampleValues);

/**
 * List of example values of all types except undefined.
 */
export const NonUndefinedTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Null,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.String,
   ExampleValues.Symbol,
];
Object.freeze(NonUndefinedTypesExampleValues);

/**
 * List of example values of all types except null and undefined.
 */
export const NonNullUndefinedTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.String,
   ExampleValues.Symbol,
];
Object.freeze(NonNullUndefinedTypesExampleValues);

/**
 * List of example values of all types except BigInt, null and undefined.
 */
export const NonBigintNullUndefinedTypesExampleValues = [
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.String,
   ExampleValues.Symbol,
];
Object.freeze(NonBigintNullUndefinedTypesExampleValues);

/**
 * List of example values of all types except boolean, null and undefined.
 */
export const NonBooleanNullUndefinedTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Function,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.String,
   ExampleValues.Symbol,
];
Object.freeze(NonBooleanNullUndefinedTypesExampleValues);

/**
 * List of example values of all types except function, null and undefined.
 */
export const NonFunctionNullUndefinedTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.String,
   ExampleValues.Symbol,
];
Object.freeze(NonFunctionNullUndefinedTypesExampleValues);

/**
 * List of example values of all types except null, number and undefined.
 */
export const NonNullNumberUndefinedTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Object,
   ExampleValues.String,
   ExampleValues.Symbol,
];
Object.freeze(NonNullNumberUndefinedTypesExampleValues);

/**
 * List of example values of all types except null, object and undefined.
 */
export const NonNullObjectUndefinedTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Number,
   ExampleValues.String,
   ExampleValues.Symbol,
];
Object.freeze(NonNullObjectUndefinedTypesExampleValues);

/**
 * List of example values of all types except null, string and undefined.
 */
export const NonNullStringUndefinedTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.Symbol,
];
Object.freeze(NonNullStringUndefinedTypesExampleValues);

/**
 * List of example values of all types except null, symbol and undefined.
 */
export const NonNullSymbolUndefinedTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.String,
];
Object.freeze(NonNullSymbolUndefinedTypesExampleValues);
