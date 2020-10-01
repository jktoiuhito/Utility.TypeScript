import { Asserter } from "./Asserter";

/**
 * Asserter containing a boolean.
 */
export class BooleanAsserter extends Asserter<boolean> {
   /**
    * Create a new Asserter containing a boolean.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is undefined, null or not a boolean. Name is null, not
    * string, is empty or consists only of whitespace.
    */
   constructor(value: boolean, name: string | undefined) {
      super(value, name);
      if (value === null) {
         throw "Value cannot be null";
      } else if (value === undefined) {
         throw "Value cannot be undefined";
      } else if (typeof value !== "boolean") {
         throw "Value must be a boolean";
      }
   }
}
