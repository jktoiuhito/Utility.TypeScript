import { BigIntAsserter } from "./BigIntAsserter";
import { BooleanAsserter } from "./BooleanAsserter";
import { FunctionAsserter } from "./FunctionAsserter";
import { NumberAsserter } from "./NumberAsserter";
import { StringAsserter } from "./StringAsserter";
import { SymbolAsserter } from "./SymbolAsserter";
import { ObjectAsserter } from "./ObjectAsserter";
import { Asserter } from "./Asserter";

/**
 * Asserter containing any value except null.
 */
export class UnknownAsserter extends Asserter<unknown> {
   /**
    * Create a new Asserter containing any value except null or undefined.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is null or undefined. Name is null, not string, is empty or
    * consists only of whitespace.
    */
   constructor(value: unknown, name: string | undefined = undefined) {
      super(value, name);
      if (value === undefined) {
         throw "Value cannot be undefined";
      } else if (value === null) {
         throw "Value cannot be null";
      }
   }

   /**
    * Assert that the value is a BigInt.
    */
   public readonly isBigInt = (): BigIntAsserter => {
      throw "not implemented";
   };

   /**
    * Assert that the value is a boolean.
    */
   public readonly isBoolean = (): BooleanAsserter => {
      throw "not implemented";
   };

   /**
    * Assert that the value is a function.
    */
   public readonly isFunction = (): FunctionAsserter => {
      throw "not implemented";
   };

   /**
    * Assert that the value is a number.
    */
   public readonly isNumber = (): NumberAsserter => {
      throw "not implemented";
   };

   /**
    * Assert that the value is an object.
    */
   public readonly isObject = (): ObjectAsserter => {
      throw "not implemented";
   };

   /**
    * Assert that the value is a string.
    */
   public readonly isString = (): StringAsserter => {
      throw "not implemented";
   };

   /**
    * Assert that the value is a Symbol.
    */
   public readonly isSymbol = (): SymbolAsserter => {
      throw "not implemented";
   };
}
