import { UnknownAsserter } from "./UnknownAsserter";
import { Asserter } from "./Asserter";

/**
 * Asserter containing any value except undefined.
 */
export class UnknownNullAsserter extends Asserter<unknown | null> {
   /**
    * Create a new Asserter containing any value except undefined.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is undefined. Name is null, not string, is empty or consists
    * only of whitespace.
    */
   constructor(value: unknown | null, name: string | undefined = undefined) {
      super(value, name);
      if (value === undefined) {
         throw "Value cannot be undefined";
      }
   }

   /**
    * Assert that the value is not null.
    * @throws The value is null.
    */
   public readonly isNotNull = (): UnknownAsserter => {
      throw "not implemented";
   };

   /**
    * Assert that the value is of given type or null.
    * @throws The value is not null and of given type.
    */
   public readonly isType = <T>(): Asserter<T | null> => {
      throw "not implemented";
   };
}
