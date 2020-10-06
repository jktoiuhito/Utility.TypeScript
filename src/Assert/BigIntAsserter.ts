import { Asserter } from "./Asserter";

/**
 * Asserter containing a bigint.
 */
export class BigIntAsserter extends Asserter<bigint> {
   /**
    * Create a new Asserter containing a bigint.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is not a bigint. Name is null, not string, is empty or
    * consists only of whitespace.
    */
   public constructor(value: bigint, name: string | undefined) {
      super(value, name);
      if (typeof value !== "bigint") {
         throw new Error("Value must be of type bigint");
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
      if (typeof number !== "bigint") {
         throw new Error("Argument must be of type bigint");
      }
      if (!(number < this._value)) {
         throw new Error(
            this._name !== undefined
               ? `'${this._name}' is not greater than '${number}'`
               : `bigint is not greater than '${number}'`
         );
      }
      return this;
   };

   /**
    * Assert that the bigint is less than another bigint.
    * @param number Bigint to assert value againts.
    * @returns Itself.
    * @throws Argument is not a bigint. The bigint is not less than the
    * argument bigint.
    */
   public readonly isLessThan = (number: bigint): BigIntAsserter => {
      if (typeof number !== "bigint") {
         throw new Error("Argument must be of type bigint");
      }
      if (!(this._value < number)) {
         throw new Error(
            this._name !== undefined
               ? `'${this._name}' is not less than '${number}'`
               : `bigint is not less than '${number}'`
         );
      }
      return this;
   };
}
