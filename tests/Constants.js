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
 * List of example values of all types except BigInt.
 */
export const NonBigintTypesExampleValues = [
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Null,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.String,
   ExampleValues.Symbol,
   ExampleValues.Undefined,
];
Object.freeze(NonBigintTypesExampleValues);

/**
 * List of example values of all types except boolean.
 */
export const NonBooleanTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Function,
   ExampleValues.Null,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.String,
   ExampleValues.Symbol,
   ExampleValues.Undefined,
];
Object.freeze(NonBooleanTypesExampleValues);

/**
 * List of example values of all types except function.
 */
export const NonFunctionTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Null,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.String,
   ExampleValues.Symbol,
   ExampleValues.Undefined,
];
Object.freeze(NonFunctionTypesExampleValues);

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
 * List of example values of all types except number.
 */
export const NonNumberTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Null,
   ExampleValues.Object,
   ExampleValues.String,
   ExampleValues.Symbol,
   ExampleValues.Undefined,
];
Object.freeze(NonNumberTypesExampleValues);

/**
 * List of example values of all types except object.
 */
export const NonObjectTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Null,
   ExampleValues.Number,
   ExampleValues.String,
   ExampleValues.Symbol,
   ExampleValues.Undefined,
];
Object.freeze(NonObjectTypesExampleValues);

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
 * List of example values of all types except symbol.
 */
export const NonSymbolTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Null,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.String,
   ExampleValues.Undefined,
];
Object.freeze(NonSymbolTypesExampleValues);

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
 * List of example values of all types except string and undefined.
 */
export const NonStringUndefinedTypesExampleValues = [
   ExampleValues.BigInt,
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Null,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.Symbol,
];
Object.freeze(NonStringUndefinedTypesExampleValues);

/**
 * List of example values of all types except bigint, null and undefined.
 */
export const NonBigIntNullUndefinedTypesExampleValues = [
   ExampleValues.Boolean,
   ExampleValues.Function,
   ExampleValues.Number,
   ExampleValues.Object,
   ExampleValues.String,
   ExampleValues.Symbol,
];
Object.freeze(NonBigIntNullUndefinedTypesExampleValues);

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
 * List of example values of all types except null, object, and undefined.
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

/**
 * Example BigInt-values.
 */
export const ExampleBigInts = [1n, 1024n, 1125899906842624n];
Object.freeze(ExampleBigInts);

/**
 * Example boolean-values.
 */
export const ExampleBooleans = [true, false];
Object.freeze(ExampleBooleans);

/**
 * Example function-values.
 */
export const ExampleFunctions = [
   () => {
      /* empty */
   },
   () => "function",
   (param) => {
      param;
   },
   (param) => param,
];
Object.freeze(ExampleFunctions);

/**
 * Example number-values.
 */
export const ExampleNumbers = [1, -1, 3.1415, -273.15];
Object.freeze(ExampleNumbers);

/**
 * Example object-values.
 */
export const ExampleObjects = [{}, { object: "object" }, [], [{}], new Error()];
Object.freeze(ExampleObjects);

/**
 * Example string-values.
 */
export const ExampleStrings = ["", " 　	\n\r", "string", " 　string	\n\r"];
Object.freeze(ExampleStrings);

/**
 * Example symbol-values.
 */
export const ExampleSymbols = [Symbol(), Symbol("symbol")];
Object.freeze(ExampleSymbols);
