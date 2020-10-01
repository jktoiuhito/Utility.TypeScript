import { UnknownNullUndefinedAsserter } from "./UnknownNullUndefinedAsserter";

/**
 * Create an assertation from a value.
 * @param value Value to create the assertation from.
 * @param name Name of the values local variable, parameter name etc.
 * @throws Name is null, not string, is empty or consists only of whitespace.
 */
export const Assert = (
   value: unknown | undefined | null,
   name: string | undefined = undefined
): UnknownNullUndefinedAsserter =>
   new UnknownNullUndefinedAsserter(value, name);
