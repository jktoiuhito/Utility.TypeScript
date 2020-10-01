import { Asserter } from "./Asserter";

/**
 * Asserter containing a BigInt.
 */
export class BigIntAsserter extends Asserter<BigInt> {
   /**
    * Create a new Asserter containing a BigInt.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is undefined, null or not a BigInt. Name is null, not
    * string, is empty or consists only of whitespace.
    */
   constructor(value: BigInt, name: string | undefined) {
      super(value, name);
      if (value === null) {
         throw "Value cannot be null";
      } else if (value === undefined) {
         throw "Value cannot be undefined";
      } else if (typeof value !== "bigint") {
         throw "Value must be a BigInt";
      }
   }
}
