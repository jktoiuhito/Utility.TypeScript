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
   // eslint-disable-next-line @typescript-eslint/ban-types
   public constructor(value: object, name: string | undefined) {
      super(value, name);
      // null check needs to remain, as typeof null === "object"...
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (value === null) {
         throw new Error("Value cannot be null");
      } else if (typeof value !== "object") {
         throw new Error("Value must be of type object");
      }
      Object.freeze(this);
   }
}
