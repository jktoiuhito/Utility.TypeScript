import { Asserter } from "./Asserter";

/**
 * Asserter containing an object.
 */
export class ObjectAsserter extends Asserter<object> {
   /**
    * Create a new Asserter containing an object.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is not an object. Name is null, not string, is empty or
    * consists only of whitespace.
    */
   constructor(value: object, name: string | undefined) {
      super(value, name);
      throw "not implemented";
   }
}
