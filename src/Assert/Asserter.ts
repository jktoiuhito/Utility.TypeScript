/**
 * Base class for performing assertions on a value.
 */
export abstract class Asserter<T> {
   protected readonly _value: T;
   protected readonly _name: string | undefined;

   /**
    * Create a new Asserter. Validity checking of the value must be performed
    * by the extending class before calling super.
    * @param value Value to perform assertations on.
    * @param name Name of the values local variable, parameter name etc.
    * @throws Name is null, not string, is empty or consists only of whitespace.
    */
   protected constructor(value: T, name: string | undefined = undefined) {
      if (!(name === undefined || typeof name === "string")) {
         throw new Error("Name must be of type string or undefined");
      }
      if (typeof name === "string") {
         if (name === "") {
            throw new Error("Name cannot be empty");
         } else if (name.trim() === "") {
            throw new Error("Name cannot consist only of whitespace");
         }
      }

      this._value = value;
      this._name = name?.trim();
   }

   /**
    * Get the value of the Asserter.
    */
   public get value(): T {
      return this._value;
   }
}
