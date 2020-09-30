import { StringAsserter } from "./StringAsserter";
import { Asserter } from "./Asserter";

/**
 * Asserter containing any value except null.
 */
export class UnknownAsserter extends Asserter<unknown> {
   /**
    * Create a new Asserter containing any value except null or undefined.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Name is not string, is empty or consists only of whitespace.
    */
   constructor(value: unknown, name: string | undefined = undefined) {
      super(value, name);
   }

   /**
    * Assert that the value is of given type.
    * Note that for strings the method isString is preferred.
    * @throws The value is not of given type.
    */
   public readonly isType = <T>(): Asserter<T> => {
      throw "not implemented";
   };

   /**
    * Assert that the value is a string.
    */
   public readonly isString = (): StringAsserter => {
      throw "not implemented";
   };
}
