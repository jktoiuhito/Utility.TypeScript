import { Asserter } from "./Asserter";

/**
 * Asserter containing a symbol.
 */
export class NumberAsserter extends Asserter<number> {
   /**
    * Create a new Asserter containing a number.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is undefined, null or not a number. Name is null, not
    * string, is empty or consists only of whitespace.
    */
   constructor(value: number, name: string | undefined) {
      super(value, name);
      if (value === null) {
         throw "Value cannot be null";
      } else if (value === undefined) {
         throw "Value cannot be undefined";
      } else if (typeof value !== "number") {
         throw "Value must be a number";
      }
   }
}
