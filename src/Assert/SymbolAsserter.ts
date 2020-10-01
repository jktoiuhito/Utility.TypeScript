import { Asserter } from "./Asserter";

/**
 * Asserter containing a symbol.
 */
export class SymbolAsserter extends Asserter<symbol> {
   /**
    * Create a new Asserter containing a symbol.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is undefined, null or not a symbol. Name is null, not
    * string, is empty or consists only of whitespace.
    */
   constructor(value: symbol, name: string | undefined) {
      super(value, name);
      if (value === null) {
         throw "Value cannot be null";
      } else if (value === undefined) {
         throw "Value cannot be undefined";
      } else if (typeof value !== "symbol") {
         throw "Value must be a symbol";
      }
   }
}
