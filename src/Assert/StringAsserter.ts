import { Asserter } from "./Asserter";

/**
 * Asserter containing a string.
 */
export class StringAsserter extends Asserter<string> {
   /**
    * Create a new Asserter containing a string.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Name is not string, is empty or consists only of whitespace.
    */
   constructor(value: string, name: string | undefined = undefined) {
      super(value, name);
   }

   /**
    * Assert that the string is not empty.
    * @throws The string is empty.
    */
   public readonly isNotEmpty = (): StringAsserter => {
      throw "not implemented";
   };

   /**
    * Assert that the string does not only consist of whitespace.
    * @throws The string consists only of whitespace.
    */
   public readonly isNotWhitespace = (): StringAsserter => {
      throw "not implemented";
   };
}
