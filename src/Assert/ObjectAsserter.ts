// We only store the object, it doesn't matter whether its currently hard to use
// or not.
/* eslint-disable @typescript-eslint/ban-types */

import { NonNullObjectAsserter } from "./NonNullObjectAsserter";
import { Asserter } from "./Asserter";

/**
 * Asserter containing an object which can ben null.
 */
export class ObjectAsserter extends Asserter<object | null> {
   /**
    * Create a new Asserter containing an object which can be null.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is not an object. Name is null, not string, is
    * empty or consists only of whitespace.
    */
   public constructor(value: object | null, name: string | undefined) {
      super(value, name);
      if (typeof value !== "object") {
         throw new Error("Value must be of type object");
      }
      Object.freeze(this);
   }

   /**
    * Assert that the object is null.
    * @returns Asserter containing the null value.
    * @throws Object is not null.
    */
   public get isNull(): Asserter<null> {
      if (this._value !== null) {
         throw new Error(
            this._name !== undefined
               ? `'${this._name}' is not null`
               : "Value is not null"
         );
      }
      return this as Asserter<null>;
   }

   /**
    * Assert that the object is not null.
    * @returns Itself.
    * @throws Object is null.
    */
   public get isNotNull(): NonNullObjectAsserter<object> {
      if (this._value === null) {
         throw new Error(
            this._name !== undefined
               ? `'${this._name}' is null`
               : "Value is null"
         );
      }
      return new NonNullObjectAsserter(this._value, this._name);
   }
}
