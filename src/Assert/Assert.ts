import { UnknownAsserter } from "./UnknownAsserter";

/**
 * Create an assertation from a value.
 * @param value Value to create the assertation from.
 * @param name Name of the values local variable, parameter name etc.
 * @throws Name is not string or undefined. Name is string but is empty or
 * consists only of whitespace.
 * @returns An asserter for performing assertions against any value.
 */
export const Assert = (
   value: unknown,
   name: string | undefined = undefined
): UnknownAsserter => new UnknownAsserter(value, name);
