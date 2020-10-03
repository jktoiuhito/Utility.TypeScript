import { Asserter } from "./Asserter";

/**
 * Asserter containing a BigInt.
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
}
