"use strict";

// single values of a specific type

export const ExampleBigInt = 1n;

export const ExampleBoolean = true;

export const ExampleFunction = () => "function";

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
      // eslint-disable-next-line no-unused-expressions
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

/**
 * Does not include null.
 */
export const ExampleNonNullObjects = [
   {},
   { object: "object" },
   [],
   [{}],
   new Error(),
];

/**
 * Inlcudes null.
 */
export const ExampleObjects = [null, ...ExampleNonNullObjects];
Object.freeze(ExampleObjects);

export const ExampleStrings = ["", " 　	\n\r", "string", " 　string	\n\r"];
Object.freeze(ExampleStrings);

export const ExampleSymbols = [Symbol(), Symbol("symbol")];
Object.freeze(ExampleSymbols);

// multiple values of different types

/**
 * List of example values of all types.
 */
export const ExampleAllTypes = [
   ...ExampleBigInts,
   ...ExampleBooleans,
   ...ExampleFunctions,
   ...ExampleNumbers,
   ...ExampleObjects,
   ...ExampleStrings,
   ...ExampleSymbols,
   ExampleUndefined,
];
Object.freeze(ExampleAllTypes);

/**
 * List of example values of all types except bigint.
 */
export const ExampleNotBigintTypes = [
   ...ExampleBooleans,
   ...ExampleFunctions,
   ...ExampleNumbers,
   ...ExampleObjects,
   ...ExampleStrings,
   ...ExampleSymbols,
   ExampleUndefined,
];
Object.freeze(ExampleNotBigintTypes);

/**
 * List of example values of all types except boolean.
 */
export const ExampleNotBooleanTypes = [
   ...ExampleBigInts,
   ...ExampleFunctions,
   ...ExampleNumbers,
   ...ExampleObjects,
   ...ExampleStrings,
   ...ExampleSymbols,
   ExampleUndefined,
];
Object.freeze(ExampleNotBooleanTypes);

/**
 * List of example values of all types except function.
 */
export const ExampleNotFunctionTypes = [
   ...ExampleBigInts,
   ...ExampleBooleans,
   ...ExampleNumbers,
   ...ExampleObjects,
   ...ExampleStrings,
   ...ExampleSymbols,
   ExampleUndefined,
];
Object.freeze(ExampleNotFunctionTypes);

/**
 * List of example values of all types except number.
 */
export const ExampleNotNumberTypes = [
   ...ExampleBigInts,
   ...ExampleBooleans,
   ...ExampleFunctions,
   ...ExampleObjects,
   ...ExampleStrings,
   ...ExampleSymbols,
   ExampleUndefined,
];
Object.freeze(ExampleNotNumberTypes);

/**
 * List of example values of all types except object.
 */
export const ExampleNotObjectTypes = [
   ...ExampleBigInts,
   ...ExampleBooleans,
   ...ExampleFunctions,
   ...ExampleNumbers,
   ...ExampleStrings,
   ...ExampleSymbols,
   ExampleUndefined,
];
Object.freeze(ExampleNotObjectTypes);

/**
 * List of example values of all types except string.
 */
export const ExampleNotStringTypes = [
   ...ExampleBigInts,
   ...ExampleBooleans,
   ...ExampleFunctions,
   ...ExampleNumbers,
   ...ExampleObjects,
   ...ExampleSymbols,
   ExampleUndefined,
];
Object.freeze(ExampleNotStringTypes);

/**
 * List of example values of all types except symbol.
 */
export const ExampleNotSymbolTypes = [
   ...ExampleBigInts,
   ...ExampleBooleans,
   ...ExampleFunctions,
   ...ExampleNumbers,
   ...ExampleObjects,
   ...ExampleStrings,
   ExampleUndefined,
];
Object.freeze(ExampleNotSymbolTypes);

/**
 * List of example values of all types except undefined.
 */
export const ExampleNotUndefinedTypes = [
   ...ExampleBigInts,
   ...ExampleBooleans,
   ...ExampleFunctions,
   ...ExampleNumbers,
   ...ExampleObjects,
   ...ExampleStrings,
   ExampleSymbol,
];
Object.freeze(ExampleNotUndefinedTypes);

/**
 * List of example values of all types except bigint and undefined.
 */
export const ExampleNotBigintUndefinedTypes = [
   ...ExampleBooleans,
   ...ExampleFunctions,
   ...ExampleNumbers,
   ...ExampleObjects,
   ...ExampleStrings,
   ...ExampleSymbols,
];
Object.freeze(ExampleNotBigintUndefinedTypes);

/**
 * List of example values of all types except boolean and undefined.
 */
export const NonBooleanNullUndefinedTypesExampleValues = [
   ...ExampleBigInts,
   ...ExampleFunctions,
   ...ExampleNumbers,
   ...ExampleObjects,
   ...ExampleStrings,
   ...ExampleSymbols,
];
Object.freeze(NonBooleanNullUndefinedTypesExampleValues);

/**
 * List of example values of all types except function and undefined.
 */
export const NonFunctionNullUndefinedTypesExampleValues = [
   ...ExampleBigInts,
   ...ExampleBooleans,
   ...ExampleNumbers,
   ...ExampleObjects,
   ...ExampleStrings,
   ...ExampleSymbols,
];
Object.freeze(NonFunctionNullUndefinedTypesExampleValues);

/**
 * List of example values of all types except number and undefined.
 */
export const ExampleNotNumberUndefinedTypes = [
   ...ExampleBigInts,
   ...ExampleBooleans,
   ...ExampleFunctions,
   ...ExampleObjects,
   ...ExampleStrings,
   ...ExampleSymbols,
];
Object.freeze(ExampleNotNumberUndefinedTypes);

/**
 * List of example values of all types except object and undefined.
 */
export const ExampleNotObjectUndefinedTypes = [
   ...ExampleBigInts,
   ...ExampleBooleans,
   ...ExampleFunctions,
   ...ExampleNumbers,
   ...ExampleStrings,
   ...ExampleSymbols,
];
Object.freeze(ExampleNotObjectUndefinedTypes);

/**
 * List of example values of all types except string and undefined.
 */
export const ExampleNotStringUndefinedTypes = [
   ...ExampleBigInts,
   ...ExampleBooleans,
   ...ExampleFunctions,
   ...ExampleNumbers,
   ...ExampleObjects,
   ...ExampleSymbols,
];
Object.freeze(ExampleNotStringUndefinedTypes);

/**
 * List of example values of all types except symbol and undefined.
 */
export const ExampleNotSymbolUndefinedTypes = [
   ...ExampleBigInts,
   ...ExampleBooleans,
   ...ExampleFunctions,
   ...ExampleNumbers,
   ...ExampleObjects,
   ...ExampleStrings,
];
Object.freeze(ExampleNotSymbolUndefinedTypes);

/**
 * List of example values of many types expect RegExp.
 */
export const NonRegExpExampleValues = [
   ...ExampleAllTypes,
   ...ExamplePrototypedFunctions,
   ...ExamplePrototypelessFunctions,
];
Object.freeze(NonRegExpExampleValues);
