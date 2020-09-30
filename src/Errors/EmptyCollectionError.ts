import { ArgumentError } from "./ArgumentError";

/**
 * Error which is thrown when a collection is empty.
 */
export class EmptyCollectionError extends TypeError {
   /**
    * Error which is thrown when a collection is empty.
    * @param name Name of the collections variable or parameter.
    * @throws {ArgumentError} Name is undefined, null, not string, is empty or
    * consists only of whitespace.
    */
   constructor(name: string) {
      if (name === undefined) {
         throw new ArgumentError("Name cannot be undefined");
      } else if (name === null) {
         throw new ArgumentError("Name cannot be null");
      } else if (typeof name !== "string") {
         throw new ArgumentError("Name must be of type string");
      } else if (name === "") {
         throw new ArgumentError("Name cannot be empty");
      } else if (!name.trim()) {
         throw new ArgumentError("Name cannot consist only of whitespace");
      }

      super(`Collection '${name.trim()}' cannot be empty`);
   }
}
