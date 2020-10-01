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
    * @throws Value is null or undefined. Name is null, not string, is empty or
    * consists only of whitespace.
    */
   constructor(value: unknown, name: string | undefined = undefined) {
      super(value, name);
      if (value === undefined) {
         throw "Value cannot be undefined";
      } else if (value === null) {
         throw "Value cannot be null";
      }
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
