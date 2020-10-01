import { Asserter } from "./Asserter";

/**
 * Asserter containing a string.
 */
export class StringAsserter extends Asserter<string> {
   /**
    * Create a new Asserter containing a string.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is undefined, null or not a string. Name is null, not
    * string, is empty or consists only of whitespace.
    */
   constructor(value: string, name: string | undefined = undefined) {
      super(value, name);
      if (value === null) {
         throw "Value cannot be null";
      } else if (value === undefined) {
         throw "Value cannot be undefined";
      } else if (typeof value !== "string") {
         throw "Value must be a string";
      }
   }

   /**
    * Assert that the string is not empty.
    * @throws The string is empty.
    * @returns Itself.
    */
   public readonly isNotEmpty = (): StringAsserter => {
      if (this._value === "") {
         throw this._name
            ? `String '${this._name}' is empty`
            : "String is empty";
      }
      return this;
   };

   /**
    * Assert that the string is empty.
    * @throws The string is not empty.
    * @returns The empty string.
    */
   public readonly isEmpty = (): string => {
      if (this._value !== "") {
         throw this._name
            ? `String '${this._name}' is not empty`
            : "String is not empty";
      }
      return this._value;
   };

   /**
    * Assert that the string does not only consist of whitespace.
    * @throws The string consists only of whitespace.
    * @returns Itself.
    */
   public readonly isNotWhitespace = (): StringAsserter => {
      if (this._value.length > 0 && this._value.trim() === "") {
         throw this._name
            ? `String '${this._name}' consists only of whitespace`
            : "String consists only of whitespace";
      }
      return this;
   };
}
