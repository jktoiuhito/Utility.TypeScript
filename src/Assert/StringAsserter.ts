import { Asserter } from "./Asserter";

/**
 * Asserter containing a string.
 */
export class StringAsserter extends Asserter<string> {
   /**
    * Create a new Asserter containing a string.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is not a string. Name is null, not string, is empty or
    * consists only of whitespace.
    */
   public constructor(value: string, name: string | undefined = undefined) {
      super(value, name);
      if (typeof value !== "string") {
         throw new Error("Value must be of type string");
      }
      Object.freeze(this);
   }

   /**
    * Assert that the string is not empty.
    * @throws The string is empty.
    * @returns Itself.
    */
   public readonly isNotEmpty = (): StringAsserter => {
      if (this._value === "") {
         throw new Error(
            this._name !== undefined
               ? `String '${this._name}' is empty`
               : "String is empty"
         );
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
         throw new Error(
            this._name !== undefined
               ? `String '${this._name}' is not empty`
               : "String is not empty"
         );
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
         throw new Error(
            this._name !== undefined
               ? `String '${this._name}' consists only of whitespace`
               : "String consists only of whitespace"
         );
      }
      return this;
   };
}
