"use strict";

// single values of a specific type

export const ExampleBigInt = 1n;

export const ExampleBoolean = true;

export const ExampleFunction = () => "function";

export const ExampleNull = null;

export const ExampleNumber = 2;

export const ExampleObject = { object: "object" };
Object.freeze(ExampleObject);

export const ExampleString = "string";

export const ExampleSymbol = Symbol("symbol");

export const ExampleUndefined = undefined;

// multiple values of a specific type

export const ExampleBigInts = [1n, 1024n, 1125899906842624n];
Object.freeze(ExampleBigInts);

export const ExampleBooleans = [true, false];
Object.freeze(ExampleBooleans);

/**
 * Functions which have an undefined prototype.
 */
export const ExamplePrototypelessFunctions = [
   () => {
      /* empty */
   },
   () => "function",
   (param) => {
      param;
   },
   (param) => param,
];
Object.freeze(ExamplePrototypelessFunctions);

/**
 * Functions which have a defined prototype.
 */
export const ExamplePrototypedFunctions = [HTMLInputElement, Error, Event];
Object.freeze(ExamplePrototypedFunctions);

/**
 * Both prototyped AND prototypeless functions.
 */
export const ExampleFunctions = [
   ...ExamplePrototypedFunctions,
   ...ExamplePrototypelessFunctions,
];

export const ExampleNumbers = [1, -1, 3.1415, -273.15];
Object.freeze(ExampleNumbers);

export const ExampleObjects = [{}, { object: "object" }, [], [{}], new Error()];
Object.freeze(ExampleObjects);

export const ExampleStrings = ["", " 　	\n\r", "string", " 　string	\n\r"];
Object.freeze(ExampleStrings);

export const ExampleSymbols = [Symbol(), Symbol("symbol")];
Object.freeze(ExampleSymbols);

// multiple values of different types

/**
 * List of example values of all types.
 */
export const AllTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleFunction,
   ExampleNull,
   ExampleNumber,
   ExampleObject,
   ExampleString,
   ExampleSymbol,
   ExampleUndefined,
];
Object.freeze(AllTypesExampleValues);

/**
 * List of example values of all types except BigInt.
 */
export const NonBigintTypesExampleValues = [
   ExampleBoolean,
   ExampleFunction,
   ExampleNull,
   ExampleNumber,
   ExampleObject,
   ExampleString,
   ExampleSymbol,
   ExampleUndefined,
];
Object.freeze(NonBigintTypesExampleValues);

/**
 * List of example values of all types except boolean.
 */
export const NonBooleanTypesExampleValues = [
   ExampleBigInt,
   ExampleFunction,
   ExampleNull,
   ExampleNumber,
   ExampleObject,
   ExampleString,
   ExampleSymbol,
   ExampleUndefined,
];
Object.freeze(NonBooleanTypesExampleValues);

/**
 * List of example values of all types except function.
 */
export const NonFunctionTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleNull,
   ExampleNumber,
   ExampleObject,
   ExampleString,
   ExampleSymbol,
   ExampleUndefined,
];
Object.freeze(NonFunctionTypesExampleValues);

/**
 * List of example values of all types except null.
 */
export const NonNullTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleFunction,
   ExampleNumber,
   ExampleObject,
   ExampleString,
   ExampleSymbol,
   ExampleUndefined,
];
Object.freeze(NonNullTypesExampleValues);

/**
 * List of example values of all types except number.
 */
export const NonNumberTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleFunction,
   ExampleNull,
   ExampleObject,
   ExampleString,
   ExampleSymbol,
   ExampleUndefined,
];
Object.freeze(NonNumberTypesExampleValues);

/**
 * List of example values of all types except object.
 */
export const NonObjectTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleFunction,
   ExampleNull,
   ExampleNumber,
   ExampleString,
   ExampleSymbol,
   ExampleUndefined,
];
Object.freeze(NonObjectTypesExampleValues);

/**
 * List of example values of all types except string.
 */
export const NonStringTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleFunction,
   ExampleNull,
   ExampleNumber,
   ExampleObject,
   ExampleSymbol,
   ExampleUndefined,
];
Object.freeze(NonStringTypesExampleValues);

/**
 * List of example values of all types except symbol.
 */
export const NonSymbolTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleFunction,
   ExampleNull,
   ExampleNumber,
   ExampleObject,
   ExampleString,
   ExampleUndefined,
];
Object.freeze(NonSymbolTypesExampleValues);

/**
 * List of example values of all types except undefined.
 */
export const NonUndefinedTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleFunction,
   ExampleNull,
   ExampleNumber,
   ExampleObject,
   ExampleString,
   ExampleSymbol,
];
Object.freeze(NonUndefinedTypesExampleValues);

/**
 * List of example values of all types except null and undefined.
 */
export const NonNullUndefinedTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleFunction,
   ExampleNumber,
   ExampleObject,
   ExampleString,
   ExampleSymbol,
];
Object.freeze(NonNullUndefinedTypesExampleValues);

/**
 * List of example values of all types except string and undefined.
 */
export const NonStringUndefinedTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleFunction,
   ExampleNull,
   ExampleNumber,
   ExampleObject,
   ExampleSymbol,
];
Object.freeze(NonStringUndefinedTypesExampleValues);

/**
 * List of example values of all types except null and object.
 */
export const NonNullObjectTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleFunction,
   ExampleNumber,
   ExampleString,
   ExampleSymbol,
   ExampleUndefined,
];
Object.freeze(NonNullObjectTypesExampleValues);

/**
 * List of example values of all types except bigint, null and undefined.
 */
export const NonBigIntNullUndefinedTypesExampleValues = [
   ExampleBoolean,
   ExampleFunction,
   ExampleNumber,
   ExampleObject,
   ExampleString,
   ExampleSymbol,
];
Object.freeze(NonBigIntNullUndefinedTypesExampleValues);

/**
 * List of example values of all types except boolean, null and undefined.
 */
export const NonBooleanNullUndefinedTypesExampleValues = [
   ExampleBigInt,
   ExampleFunction,
   ExampleNumber,
   ExampleObject,
   ExampleString,
   ExampleSymbol,
];
Object.freeze(NonBooleanNullUndefinedTypesExampleValues);

/**
 * List of example values of all types except function, null and undefined.
 */
export const NonFunctionNullUndefinedTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleNumber,
   ExampleObject,
   ExampleString,
   ExampleSymbol,
];
Object.freeze(NonFunctionNullUndefinedTypesExampleValues);

/**
 * List of example values of all types except null, number and undefined.
 */
export const NonNullNumberUndefinedTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleFunction,
   ExampleObject,
   ExampleString,
   ExampleSymbol,
];
Object.freeze(NonNullNumberUndefinedTypesExampleValues);

/**
 * List of example values of all types except null, object, and undefined.
 */
export const NonNullObjectUndefinedTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleFunction,
   ExampleNumber,
   ExampleString,
   ExampleSymbol,
];
Object.freeze(NonNullObjectUndefinedTypesExampleValues);

/**
 * List of example values of all types except null, string and undefined.
 */
export const NonNullStringUndefinedTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleFunction,
   ExampleNumber,
   ExampleObject,
   ExampleSymbol,
];
Object.freeze(NonNullStringUndefinedTypesExampleValues);

/**
 * List of example values of all types except null, symbol and undefined.
 */
export const NonNullSymbolUndefinedTypesExampleValues = [
   ExampleBigInt,
   ExampleBoolean,
   ExampleFunction,
   ExampleNumber,
   ExampleObject,
   ExampleString,
];
Object.freeze(NonNullSymbolUndefinedTypesExampleValues);

/**
 * List of example values of many types expect RegExp.
 */
export const NonRegExpExampleValues = [
   ...AllTypesExampleValues,
   ...ExamplePrototypedFunctions,
   ...ExamplePrototypelessFunctions,
];
Object.freeze(NonRegExpExampleValues);
