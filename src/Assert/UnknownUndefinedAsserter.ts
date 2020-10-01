import { UnknownAsserter } from "./UnknownAsserter";
import { Asserter } from "./Asserter";

/**
 * Asserter containing any value except null.
 */
export class UnknownUndefinedAsserter extends Asserter<unknown | undefined> {
   /**
    * Create a new Asserter containing any value except null.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is null. Name is null, not string, is empty or consists only
    * of whitespace.
    */
   constructor(
      value: unknown | undefined,
      name: string | undefined = undefined
   ) {
      super(value, name);
      if (value === null) {
         throw "Value cannot be null";
      }
   }

   /**
    * Assert that the value is not undefined.
    * @throws The value is undefined.
    */
   public readonly isNotUndefined = (): UnknownAsserter => {
      throw "not implemented";
   };

   /**
    * Assert that the value is undefined.
    * @throws The value is not undefined.
    */
   public readonly isUndefined = (): undefined => {
      throw "not implemented";
   };
}
