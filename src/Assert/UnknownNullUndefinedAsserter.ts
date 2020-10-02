import { UnknownUndefinedAsserter } from "./UnknownUndefinedAsserter";
import { UnknownNullAsserter } from "./UnknownNullAsserter";
import { Asserter } from "./Asserter";

/**
 * Asserter containing any value.
 */
export class UnknownNullUndefinedAsserter extends Asserter<
   unknown | null | undefined
> {
   /**
    * Create a new Asserter containing any value.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Name is null, not string, is empty or consists only of whitespace.
    */
   public constructor(
      value: unknown | null | undefined,
      name: string | undefined = undefined
   ) {
      super(value, name);
      Object.freeze(this);
   }

   /**
    * Assert that the value is not null.
    * @throws The value is null.
    * @returns An asserter for performing assertions against non-null values.
    */
   public readonly isNotNull = (): UnknownUndefinedAsserter => {
      if (this._value === null) {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is null`
               : "Value is null"
         );
      }
      return new UnknownUndefinedAsserter(this._value, this._name);
   };

   /**
    * Assert that the value is null.
    * @throws Value is not null.
    * @returns The null value.
    */
   public readonly isNull = (): null => {
      if (this._value !== null) {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not null`
               : "Value is not null"
         );
      }
      return this._value;
   };

   /**
    * Assert that the value is not undefined.
    * @throws The value is undefined.
    * @returns An asserter for performing assertions against non-undefined
    * values.
    */
   public readonly isNotUndefined = (): UnknownNullAsserter => {
      if (this._value === undefined) {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is undefined`
               : "Value is undefined"
         );
      }
      return new UnknownNullAsserter(this._value, this._name);
   };

   /**
    * Assert that the value is undefined.
    * @throws Value is not undefined.
    * @returns The undefined value.
    */
   public readonly isUndefined = (): undefined => {
      if (this._value !== undefined) {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not undefined`
               : "Value is not undefined"
         );
      }
      return this._value;
   };
}
