import { Asserter } from "./Asserter";

/**
 * Asserter containing a function.
 */
// The function is only stored, never called, so type safety of its signature is
// not important.
// eslint-disable-next-line @typescript-eslint/ban-types
export class FunctionAsserter extends Asserter<Function> {
   /**
    * Create a new Asserter containing a function.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is not a function. Name is null, not string, is empty or
    * consists only of whitespace.
    */
   // ban-types: reasoning is same as above.
   // prefer-readonly-parameter-types: Function type cannot have the readonly
   // modifier.
   // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/prefer-readonly-parameter-types
   public constructor(value: Function, name: string | undefined) {
      super(value, name);
      if (typeof value !== "function") {
         throw new Error("Value must be of type function");
      }
      Object.freeze(this);
   }
}
