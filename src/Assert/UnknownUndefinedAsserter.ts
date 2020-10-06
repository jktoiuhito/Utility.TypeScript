import { UnknownAsserter } from "./UnknownAsserter";
import { Asserter } from "./Asserter";

/**
 * Asserter containing any value except null.
 */
export class UnknownUndefinedAsserter extends Asserter<unknown | undefined> {
   /**
    * Create a new Asserter containing any value except null.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is null. Name is null, not string, is empty or consists only
    * of whitespace.
    */
   public constructor(
      value: unknown | undefined,
      name: string | undefined = undefined
   ) {
      super(value, name);
      if (value === null) {
         throw new Error("Value cannot be null");
      }
      Object.freeze(this);
   }

   /**
    * Assert that the value is not undefined.
    * @throws The value is undefined.
    * @returns An asserter for performing assertions against any
    * non-null/undefined value.
    */
   public get isNotUndefined(): UnknownAsserter {
      if (this._value === undefined) {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is undefined`
               : "Value is undefined"
         );
      }
      return new UnknownAsserter(this._value, this._name);
   }

   /**
    * Assert that the value is undefined.
    * @returns An asserter containing the undefined value.
    * @throws The value is not undefined.
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
