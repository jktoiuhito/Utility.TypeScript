import { Asserter } from "./Asserter";

/**
 * Asserter containing a boolean.
 */
export class BooleanAsserter extends Asserter<boolean> {
   /**
    * Create a new Asserter containing a boolean.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is not a boolean. Name is null, not string, is empty or
    * consists only of whitespace.
    */
   public constructor(value: boolean, name: string | undefined) {
      super(value, name);
      if (typeof value !== "boolean") {
         throw new Error("Value must be of type boolean");
      }
      Object.freeze(this);
   }

   /**
    * Assert that the boolean is true.
    * @returns An asserter containing the boolean value 'true'.
    * @throws The boolean is not true.
    */
   public get isTrue(): Asserter<true> {
      throw new Error("not implemented");
   }

   /**
    * Assert that the boolean is false.
    * @returns An asserter containing the boolean value 'false'.
    * @throws The boolean is not false.
    */
   public get isFalse(): Asserter<false> {
      throw new Error("not implemented");
   }

   /**
    * Assert that the boolean has the same value as another boolean.
    * @param boolean Boolean to compare value against.
    * @returns Itself.
    * @throws The argument value is not boolean. Boolean and argument boolean
    * are not equal.
    */
   public readonly isEqual = (boolean: boolean): BooleanAsserter => {
      throw new Error("not implemented");
   };
}
