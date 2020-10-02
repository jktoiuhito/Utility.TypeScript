import { Asserter } from "./Asserter";

/**
 * Asserter containing a BigInt.
 */
export class BigIntAsserter extends Asserter<bigint> {
   /**
    * Create a new Asserter containing a BigInt.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is undefined, null or not a BigInt. Name is null, not
    * string, is empty or consists only of whitespace.
    */
   public constructor(value: bigint, name: string | undefined) {
      super(value, name);
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (value === null) {
         throw new Error("Value cannot be null");
         // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      } else if (value === undefined) {
         throw new Error("Value cannot be undefined");
      } else if (typeof value !== "bigint") {
         throw new Error("Value must be a BigInt");
      }
   }
}
