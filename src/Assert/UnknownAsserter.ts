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
    * @throws Name is null, not string, is empty or
    * consists only of whitespace.
    */
   public constructor(value: unknown, name: string | undefined = undefined) {
      super(value, name);
      Object.freeze(this);
   }

   /**
    * Assert that the value is a bigint.
    * @returns An asserter for performing assertions against bigints.
    * @throws The value is not a bigint.
    */
   public get isBigint(): BigIntAsserter {
      if (typeof this._value !== "bigint") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not a bigint`
               : "Value is not a bigint"
         );
      }
      return new BigIntAsserter(this._value, this._name);
   }

   /**
    * Assert that the value is a boolean.
    * @returns An asserter for performing assertions against booleans.
    * @throws The value is not a boolean.
    */
   public get isBoolean(): BooleanAsserter {
      if (typeof this._value !== "boolean") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not a boolean`
               : "Value is not a boolean"
         );
      }
      return new BooleanAsserter(this._value, this._name);
   }

   /**
    * Assert that the value is a function.
    * @returns An asserter for performing assertions against functions.
    * @throws The value is not a function.
    */
   public get isFunction(): FunctionAsserter {
      if (typeof this._value !== "function") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not a function`
               : "Value is not a function"
         );
      }
      return new FunctionAsserter(this._value, this._name);
   }

   /**
    * Assert that the value is a number.
    * @returns An asserter for performing assertions against numbers.
    * @throws The value is not a number.
    */
   public get isNumber(): NumberAsserter {
      if (typeof this._value !== "number") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not a number`
               : "Value is not a number"
         );
      }
      return new NumberAsserter(this._value, this._name);
   }

   /**
    * Assert that the value is an object.
    * @returns An asserter for performing assertions against objects.
    * @throws The value is not an object.
    */
   public get isObject(): ObjectAsserter {
      if (typeof this._value !== "object") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not an object`
               : "Value is not an object"
         );
      }
      // this._value is never null, but for some reason eslint does not
      // recognize that. Or maybe TS just automatically converts type 'object'
      // to 'object | null', due to strictNullChecks being enabled.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return new ObjectAsserter(this._value!, this._name);
   }

   /**
    * Assert that the value is a string.
    * @returns An asserter for performing assertions against strings.
    * @throws The value is not a string.
    */
   public get isString(): StringAsserter {
      if (typeof this._value !== "string") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not a string`
               : "Value is not a string"
         );
      }
      return new StringAsserter(this._value, this._name);
   }

   /**
    * Assert that the value is a Symbol.
    * @returns An asserter for performing assertions against symbols.
    * @throws The value is not a symbol.
    */
   public get isSymbol(): SymbolAsserter {
      if (typeof this._value !== "symbol") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not a symbol`
               : "Value is not a symbol"
         );
      }
      return new SymbolAsserter(this._value, this._name);
   }

   /**
    * Assert that the value is undefined.
    * @returns Asserter containing the undefined value.
    * @throws The value is not undefined.
    */
   public get isUndefined(): Asserter<undefined> {
      if (typeof this._value !== "undefined") {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not undefined`
               : "Value is not undefined"
         );
      }
      return this as Asserter<undefined>;
   }
}
