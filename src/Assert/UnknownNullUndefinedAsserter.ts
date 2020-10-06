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
   public get isNotNull(): UnknownUndefinedAsserter {
      if (this._value === null) {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is null`
               : "Value is null"
         );
      }
      return new UnknownUndefinedAsserter(this._value, this._name);
   }

   /**
    * Assert that the value is null.
    * @returns Asserter containing the null value.
    * @throws Value is not null.
    */
   public get isNull(): Asserter<null> {
      if (this._value !== null) {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not null`
               : "Value is not null"
         );
      }
      return this as Asserter<null>;
   }

   /**
    * Assert that the value is not undefined.
    * @throws The value is undefined.
    * @returns An asserter for performing assertions against non-undefined
    * values.
    */
   public get isNotUndefined(): UnknownNullAsserter {
      if (this._value === undefined) {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is undefined`
               : "Value is undefined"
         );
      }
      return new UnknownNullAsserter(this._value, this._name);
   }

   /**
    * Assert that the value is undefined.
    * @returns An asserter containing the undefined value.
    * @throws Value is not undefined.
    */
   public get isUndefined(): Asserter<undefined> {
      if (this._value !== undefined) {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is not undefined`
               : "Value is not undefined"
         );
      }
      return this as Asserter<undefined>;
   }
}
