import { Asserter } from "./Asserter";

/**
 * Asserter containing an object.
 */
export class ObjectAsserter extends Asserter<object> {
   /**
    * Create a new Asserter containing an object.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Value is undefined, null or not an object. Name is null, not
    * string, is empty or consists only of whitespace.
    */
   public constructor(value: object, name: string | undefined) {
      super(value, name);
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (value === null) {
         throw new Error("Value cannot be null");
         // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      } else if (value === undefined) {
         throw new Error("Value cannot be undefined");
      } else if (typeof value !== "object") {
         throw new Error("Value must be an object");
      }
   }
}
