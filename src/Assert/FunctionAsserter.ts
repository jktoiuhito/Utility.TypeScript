import { Asserter } from "./Asserter";

/**
 * Asserter containing a function.
 */
export class FunctionAsserter extends Asserter<Function> {
   /**
    * Create a new Asserter containing a function.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is not a function. Name is null, not string, is empty or
    * consists only of whitespace.
    */
   constructor(value: Function, name: string | undefined) {
      super(value, name);
      throw "not implemented";
   }
}
