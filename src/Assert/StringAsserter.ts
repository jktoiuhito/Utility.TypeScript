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
   public get isNotEmpty(): StringAsserter {
      if (this._value === "") {
         throw new Error(
            this._name !== undefined
               ? `String '${this._name}' is empty`
               : "String is empty"
         );
      }
      return this;
   }

   /**
    * Assert that the string is empty.
    * @returns An asserter containing an empty string.
    * @throws The string is not empty.
    */
   public get isEmpty(): Asserter<string> {
      if (this._value !== "") {
         throw new Error(
            this._name !== undefined
               ? `String '${this._name}' is not empty`
               : "String is not empty"
         );
      }
      return this;
   }

   /**
    * Assert that the string does not only consist of whitespace.
    * @returns Itself.
    * @throws The string consists only of whitespace.
    */
   public get isNotWhitespace(): StringAsserter {
      if (this._value.length > 0 && this._value.trim() === "") {
         throw new Error(
            this._name !== undefined
               ? `String '${this._name}' consists only of whitespace`
               : "String consists only of whitespace"
         );
      }
      return this;
   }

   /**
    * Assert that the string is matched by a regular expression.
    * @param pattern Regular expression to match the string with.
    * @returns Itself.
    * @throws The argument is not a regular expression. The string does not
    * match the regular expression.
    */
   // readonly type modifier is not permitted on type RegExp.
   // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
   public readonly isMatch = (pattern: RegExp): StringAsserter => {
      throw new Error("not implemented");
   };

   /**
    * Assert that the string is not matched by a regular expression.
    * @param pattern Regular expression to match the string with.
    * @returns Itself.
    * @throws The argument is not a regular expression. The string matched the
    * regular expression.
    */
   // readonly type modifier is not permitted on type RegExp.
   // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
   public readonly isNotMatch = (pattern: RegExp): StringAsserter => {
      throw new Error("not implemented");
   };
}
