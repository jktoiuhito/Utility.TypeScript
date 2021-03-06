import { Asserter } from "./Asserter";

/**
 * Asserter containing a symbol.
 */
export class SymbolAsserter extends Asserter<symbol> {
   /**
    * Create a new Asserter containing a symbol.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is not a symbol. Name is null, not string, is empty or
    * consists only of whitespace.
    */
   public constructor(value: symbol, name: string | undefined) {
      super(value, name);
      if (typeof value !== "symbol") {
         throw new Error("Value must be of type symbol");
      }
      Object.freeze(this);
   }
}
