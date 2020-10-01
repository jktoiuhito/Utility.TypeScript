import { Asserter } from "./Asserter";

/**
 * Asserter containing a function.
 */
export class FunctionAsserter extends Asserter<Function> {
   /**
    * Create a new Asserter containing a function.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is undefined, null or not a function. Name is null, not
    * string, is empty or consists only of whitespace.
    */
   constructor(value: Function, name: string | undefined) {
      super(value, name);
      if (value === null) {
         throw "Value cannot be null";
      } else if (value === undefined) {
         throw "Value cannot be undefined";
      } else if (typeof value !== "function") {
         throw "Value must be a function";
      }
   }
}
