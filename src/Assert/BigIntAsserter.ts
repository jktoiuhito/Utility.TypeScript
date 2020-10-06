import { Asserter } from "./Asserter";

/**
 * Asserter containing a bigint.
 */
export class BigIntAsserter extends Asserter<bigint> {
   /**
    * Create a new Asserter containing a BigInt.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is not a BigInt. Name is null, not string, is empty or
    * consists only of whitespace.
    */
   public constructor(value: bigint, name: string | undefined) {
      super(value, name);
      if (typeof value !== "bigint") {
         throw new Error("Value must be of type BigInt");
      }
      Object.freeze(this);
   }

   /**
    * Assert that the bigint is greater than another bigint.
    * @param number Bigint to assert value againts.
    * @returns Itself.
    * @throws Argument is not a bigint. The bigint is not greater than the
    * argument bigint.
    */
   public readonly isGreaterThan = (number: bigint): BigIntAsserter => {
      throw new Error("not implemented");
   };

   /**
    * Assert that the bigint is less than another bigint.
    * @param number Bigint to assert value againts.
    * @returns Itself.
    * @throws Argument is not a bigint. The bigint is not less than the
    * argument bigint.
    */
   public readonly islessThan = (number: bigint): BigIntAsserter => {
      throw new Error("not implemented");
   };
}
