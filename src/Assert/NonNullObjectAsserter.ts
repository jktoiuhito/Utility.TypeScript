// We only store the object, it doesn't matter whether its currently hard to use
// or not.
/* eslint-disable @typescript-eslint/ban-types */

import { Asserter } from "./Asserter";

/**
 * Asserter containing an object.
 */
export class NonNullObjectAsserter<T extends object> extends Asserter<T> {
   /**
    * Create a new Asserter containing an object.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is not an object or is null. Name is null, not string, is
    * empty or consists only of whitespace.
    */
   public constructor(value: T, name: string | undefined) {
      super(value, name);
      if (typeof value !== "object") {
         throw new Error("Value must be of type object");
         // typeof null === "object"
         // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      } else if (value === null) {
         throw new Error("Value cannot be null");
      }
      Object.freeze(this);
   }

   /**
    * Assert that the object is an instance of a specific type.
    * @param type Type (= a constructor function) to assert against.
    * @returns Itself.
    * @throws Type is not a function. The object is not an instance of the given
    * type.
    * @see This article from Ran Lottem helped A LOT in creating this method:
    *  https://dev.to/krumpet/generic-type-guard-in-typescript-258l
    */
   public readonly isInstanceOf = <T2 extends object>(type: {
      new (): T2;
   }): NonNullObjectAsserter<T2> => {
      if (typeof type !== "function") {
         throw new Error("Type must be of type function");
      } else if (type.prototype === undefined) {
         throw new Error("Type must have a defined prototype");
      } else if (!(this._value instanceof type)) {
         throw new Error(`Object is not an instance of '${type.name}'`);
      }
      return (this as unknown) as NonNullObjectAsserter<T2>;
   };

   /**
    * Assert that an object is referentially equal to another object.
    * @param object Object to assert referential equality againts.
    * @returns Itself.
    * @throws Argument is not an object or is null. The object is not
    * referentially equal to the argument object.
    */
   public readonly is = (object: object): NonNullObjectAsserter<T> => {
      if (typeof object !== "object") {
         throw new Error("Argument must be of type object");
         // typeof null === "object"
         // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      } else if (object === null) {
         throw new Error("Argument cannot be null");
      } else if (this._value !== object) {
         throw new Error(
            this._name !== undefined
               ? `'${this._name}' is not referentially equal to the given object`
               : "object is not referentially equal to the given object"
         );
      }
      return this;
   };

   /**
    * Assert that an object is not referentially equal to another object.
    * @param object Object to assert referential equality againts.
    * @returns Itself.
    * @throws Argument is not an object or is null. The object is referentially
    * equal to the argument object.
    */
   public readonly isNot = (object: object): NonNullObjectAsserter<T> => {
      if (typeof object !== "object") {
         throw new Error("Argument must be of type object");
         // typeof null === "object"
         // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      } else if (object === null) {
         throw new Error("Argument cannot be null");
      } else if (this._value === object) {
         throw new Error(
            this._name !== undefined
               ? `'${this._name}' is referentially equal to the given object`
               : "object is referentially equal to the given object"
         );
      }
      return this;
   };

   /**
    * Assert that the object passes the predicate.
    * @param predicate Predicate function to check the object with.
    * @returns Itself.
    * @throws The argument is not a function. The argument function does not
    * expect exactly one parameter, returns a non-boolean value or throws an
    * error during execution. The object does not match the predicate.
    */
   public readonly isMatch = (
      predicate: (object: object | null) => boolean
   ): NonNullObjectAsserter<T> => {
      if (typeof predicate !== "function") {
         throw new Error("Predicate must be of type function");
      } else if (predicate.length !== 1) {
         throw new Error("Predicate must expect exactly one parameter");
      }
      const ret = predicate(this._value);
      if (typeof ret !== "boolean") {
         throw new Error("Predicate must return a value of type boolean");
      } else if (!ret) {
         throw new Error(
            this._name !== undefined
               ? `'${this._name}' does not match the predicate`
               : "object does not match the predicate"
         );
      }
      return this;
   };
}
