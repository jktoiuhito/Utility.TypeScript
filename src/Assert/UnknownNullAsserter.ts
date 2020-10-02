import { UnknownAsserter } from "./UnknownAsserter";
import { Asserter } from "./Asserter";

/**
 * Asserter containing any value except undefined.
 */
export class UnknownNullAsserter extends Asserter<unknown | null> {
   /**
    * Create a new Asserter containing any value except undefined.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is undefined. Name is null, not string, is empty or consists
    * only of whitespace.
    */
   public constructor(
      value: unknown | null,
      name: string | undefined = undefined
   ) {
      super(value, name);
      if (value === undefined) {
         throw new Error("Value cannot be undefined");
      }
      Object.freeze(this);
   }

   /**
    * Assert that the value is not null.
    * @throws The value is null.
    * @returns An asserter for performing assertions against any
    * non-null/undefined values.
    */
   public readonly isNotNull = (): UnknownAsserter => {
      if (this._value === null) {
         throw new Error(
            this._name !== undefined
               ? `Value of '${this._name}' is null`
               : "Value is null"
         );
      }
      return new UnknownAsserter(this._value, this._name);
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
}
