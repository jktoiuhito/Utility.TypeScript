import { UnknownUndefinedAsserter } from "./UnknownUndefinedAsserter";
import { UnknownNullAsserter } from "./UnknownNullAsserter";
import { UnknownAsserter } from "./UnknownAsserter";
import { Asserter } from "./Asserter";

/**
 * Asserter containing any value.
 */
export class UnknownNullUndefinedAsserter extends Asserter<
   unknown | null | undefined
> {
   /**
    * Create a new Asserter containing any value.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Name is not string, is empty or consists only of whitespace.
    */
   constructor(
      value: unknown | null | undefined,
      name: string | undefined = undefined
   ) {
      super(value, name);
   }

   /**
    * Assert that the value is not null.
    * @throws The value is null.
    */
   public readonly isNotNull = (): UnknownUndefinedAsserter => {
      throw "not implemented";
   };

   /**
    * Assert that the value is not undefined.
    * @throws The value is undefined.
    */
   public readonly isNotUndefined = (): UnknownNullAsserter => {
      throw "not implemented";
   };

   /**
    * Assert that the value is not null or undefined.
    * @throws The value is null or undefined.
    */
   public readonly isNotNullUndefined = (): UnknownAsserter => {
      throw "not implemented";
   };

   /**
    * Assert that the value is of given type, null or undefined.
    * @throws The value is not null / undefined and of given type.
    */
   public readonly isType = <T>(): Asserter<T | null | undefined> => {
      throw "not implemented";
   };
}
