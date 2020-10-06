import { Asserter } from "./Asserter";

/**
 * Asserter containing an object.
 */
// We only store the object, no difference whether its currently hard to use or
// not.
// eslint-disable-next-line @typescript-eslint/ban-types
export class ObjectAsserter<T extends object> extends Asserter<T> {
   /**
    * Create a new Asserter containing an object.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is not an object or is null. Name is null, not string, is
    * empty or consists only of whitespace.
    */
   // same reasoning as above.
   // eslint-disable-next-line @typescript-eslint/ban-types
   public constructor(value: T, name: string | undefined) {
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
    * @returns Itself.
    * @throws Type is not a function. The object is not an instance of the given
    * type.
    * @see This article from Ran Lottem helped A LOT in creating this method:
    *  https://dev.to/krumpet/generic-type-guard-in-typescript-258l
    */
   // same reasoning as above.
   // eslint-disable-next-line @typescript-eslint/ban-types
   public readonly isInstanceOf = <T2 extends object>(type: {
      new (): T2;
   }): ObjectAsserter<T2> => {
      if (typeof type !== "function") {
         throw new Error("Type must be of type function");
      } else if (type.prototype === undefined) {
         throw new Error("Type must have a defined prototype");
      } else if (!(this._value instanceof type)) {
         throw new Error(`Object is not an instance of '${type.name}'`);
      }
      return (this as unknown) as ObjectAsserter<T2>;
   };

   /**
    * Assert that an object is referentially equal to another object.
    * @param object Object to assert referential equality againts.
    * @returns Itself.
    * @throws Argument is not an object. The object is not referentially equal
    * to the argument object.
    */
   // The value to compare for reference equality must be the same type as the
   // stored value, which is an object.
   // eslint-disable-next-line @typescript-eslint/ban-types
   public readonly is = (object: object): ObjectAsserter<T> => {
      throw new Error("not implemented");
   };

   /**
    * Assert that an object is not referentially equal to another object.
    * @param object Object to assert referential equality againts.
    * @returns Itself.
    * @throws Argument is not an object. The object is referentially equal
    * to the argument object.
    */
   // The value to compare for reference equality must be the same type as the
   // stored value, which is an object.
   // eslint-disable-next-line @typescript-eslint/ban-types
   public readonly isNot = (object: object): ObjectAsserter<T> => {
      throw new Error("not implemented");
   };

   /**
    * Assert that the object passes the predicate.
    * @param predicate Predicate function to check the object with.
    * @returns Itself.
    * @throws The argument is not a function. The argument function does not
    * expect exactly one parameter, return a boolean value or throws an error.
    * The object does not match the predicate.
    */
   public readonly isMatch = (
      // The value to compare for reference equality must be the same type as
      // the stored value, which is an object.
      // eslint-disable-next-line @typescript-eslint/ban-types
      predicate: (object: object) => boolean
   ): ObjectAsserter<T> => {
      throw new Error("not implemented");
   };
}
