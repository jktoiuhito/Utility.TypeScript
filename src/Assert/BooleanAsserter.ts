import { Asserter } from "./Asserter";

/**
 * Asserter containing a boolean.
 */
export class BooleanAsserter extends Asserter<boolean> {
   /**
    * Create a new Asserter containing a boolean.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is not a boolean. Name is null, not string, is empty or
    * consists only of whitespace.
    */
   constructor(value: boolean, name: string | undefined) {
      super(value, name);
      throw "not implemented";
   }
}
