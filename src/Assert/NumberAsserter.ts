import { Asserter } from "./Asserter";

/**
 * Asserter containing a symbol.
 */
export class NumberAsserter extends Asserter<number> {
   /**
    * Create a new Asserter containing a number.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is not a number. Name is null, not string, is empty or
    * consists only of whitespace.
    */
   public constructor(value: number, name: string | undefined) {
      super(value, name);
      if (typeof value !== "number") {
         throw new Error("Value must be of type number");
      }
      Object.freeze(this);
   }

   /**
    * Assert that the number is greater than another number.
    * @param number Number to assert value againts.
    * @returns Itself.
    * @throws Argument is not a number. The number is not greater than the
    * argument number.
    */
   public readonly isGreaterThan = (number: number): NumberAsserter => {
      throw new Error("not implemented");
   };

   /**
    * Assert that the number is less than another number.
    * @param number Number to assert value againts.
    * @returns Itself.
    * @throws Argument is not a number. The number is not less than the
    * argument number.
    */
   public readonly islessThan = (number: number): NumberAsserter => {
      throw new Error("not implemented");
   };

   /**
    * Assert that the number is a safe integer.
    * @returns Itself.
    * @throws The number is not a safe integer.
    */
   public get isSafeInteger(): NumberAsserter {
      throw new Error("not implemented");
   }

   /**
    * Assert that the number is NaN.
    * @returns Asserter containing the NaN value.
    * @throws The number is not NaN.
    */
   public get isNaN(): Asserter<number> {
      throw new Error("not implemented");
   }

   /**
    * Assert that the number is not NaN.
    * @returns Itself.
    * @throws The number is NaN.
    */
   public get isNotNaN(): NumberAsserter {
      throw new Error("not implemented");
   }
}
