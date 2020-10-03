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
}
