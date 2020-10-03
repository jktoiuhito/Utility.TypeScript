import { FunctionAsserter } from "./FunctionAsserter";
import { BooleanAsserter } from "./BooleanAsserter";
import { NumberAsserter } from "./NumberAsserter";
import { StringAsserter } from "./StringAsserter";
import { SymbolAsserter } from "./SymbolAsserter";
import { ObjectAsserter } from "./ObjectAsserter";
import { BigIntAsserter } from "./BigIntAsserter";
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
   public constructor(value: unknown, name: string | undefined = undefined) {
      super(value, name);
      if (value === undefined) {
         throw new Error("Value cannot be undefined");
      } else if (value === null) {
         throw new Error("Value cannot be null");
      }
      Object.freeze(this);
   }

   /**
    * Assert that the value is a BigInt.
    * @returns An asserter for performing assertions against BigInts.
    */
   public readonly isBigInt = (): BigIntAsserter => {
      if (typeof this._value !== "bigint") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not a BigInt`
               : "Value is not a BigInt"
         );
      }
      return new BigIntAsserter(this._value, this._name);
   };

   /**
    * Assert that the value is a boolean.
    * @returns An asserter for performing assertions against booleans.
    */
   public readonly isBoolean = (): BooleanAsserter => {
      if (typeof this._value !== "boolean") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not a boolean`
               : "Value is not a boolean"
         );
      }
      return new BooleanAsserter(this._value, this._name);
   };

   /**
    * Assert that the value is a function.
    * @returns An asserter for performing assertions against functions.
    */
   public readonly isFunction = (): FunctionAsserter => {
      if (typeof this._value !== "function") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not a function`
               : "Value is not a function"
         );
      }
      return new FunctionAsserter(this._value, this._name);
   };

   /**
    * Assert that the value is a number.
    * @returns An asserter for performing assertions against numbers.
    */
   public readonly isNumber = (): NumberAsserter => {
      if (typeof this._value !== "number") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not a number`
               : "Value is not a number"
         );
      }
      return new NumberAsserter(this._value, this._name);
   };

   /**
    * Assert that the value is an object.
    * @returns An asserter for performing assertions against objects.
    */
   // eslint-disable-next-line @typescript-eslint/ban-types
   public readonly isObject = (): ObjectAsserter => {
      if (typeof this._value !== "object") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not an object`
               : "Value is not an object"
         );
      }
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return new ObjectAsserter(this._value!, this._name);
   };

   /**
    * Assert that the value is a string.
    * @returns An asserter for performing assertions against strings.
    */
   public readonly isString = (): StringAsserter => {
      if (typeof this._value !== "string") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not a string`
               : "Value is not a string"
         );
      }
      return new StringAsserter(this._value, this._name);
   };

   /**
    * Assert that the value is a Symbol.
    * @returns An asserter for performing assertions against symbols.
    */
   public readonly isSymbol = (): SymbolAsserter => {
      if (typeof this._value !== "symbol") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not a symbol`
               : "Value is not a symbol"
         );
      }
      return new SymbolAsserter(this._value, this._name);
   };
}
