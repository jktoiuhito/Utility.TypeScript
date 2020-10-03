import { Asserter } from "./Asserter";

/**
 * Asserter containing an object.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export class ObjectAsserter extends Asserter<object> {
   /**
    * Create a new Asserter containing an object.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is not an object or is null. Name is null, not string, is
    * empty or consists only of whitespace.
    */
   // using object as a type is necessary here.
   // eslint-disable-next-line @typescript-eslint/ban-types
   public constructor(value: object, name: string | undefined) {
      super(value, name);
      if (typeof value !== "object") {
         throw new Error("Value must be of type object");
         // null check needs to remain, as typeof null === "object"...
         // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      } else if (value === null) {
         throw new Error("Value cannot be null");
      }
      Object.freeze(this);
   }

   /**
    * Assert that the object is an instance of a specific type.
    * @param type Type (= a constructor function) to assert against.
    * @returns The object as the given type.
    * @throws Type is not a function. The object is not an instance of the given
    * type.
    * @see This article from Ran Lottem helped A LOT in creating this method:
    *  https://dev.to/krumpet/generic-type-guard-in-typescript-258l
    */
   public readonly isInstanceOf = <T>(type: { new (): T }): T => {
      if (typeof type !== "function") {
         throw new Error("Type must be of type function");
      } else if (type.prototype === undefined) {
         throw new Error("Type must have a defined prototype");
      } else if (!(this._value instanceof type)) {
         throw new Error(`Object is not an instance of '${type.name}'`);
      }
      return this._value as T;
   };
}
